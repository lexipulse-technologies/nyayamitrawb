-- Run manually by the project owner in Supabase SQL Editor after reviewing.
-- Does not alter public.case_intakes, so get_submission_by_id()'s SETOF
-- case_intakes response cannot expose the IPv4 field.

create table if not exists public.case_intake_ip_audit (
  ticket_id text primary key,
  client_ipv4 inet,
  ip_capture_status text not null check (ip_capture_status in ('captured', 'unavailable')),
  captured_at timestamptz not null default now(),
  constraint case_intake_ip_audit_ticket_fk
    foreign key (ticket_id) references public.case_intakes(id) on delete cascade
);

alter table public.case_intake_ip_audit enable row level security;
revoke all on table public.case_intake_ip_audit from public, anon, authenticated;
grant select, insert, update, delete on table public.case_intake_ip_audit to service_role;

-- No anon/authenticated policies: only a server using the Supabase service-role
-- key may write/read the IP side table. Never add a public SELECT policy.

create or replace function public.create_case_intake_with_ipv4(
  intake_row jsonb,
  client_ipv4 inet
)
returns void
language plpgsql
security definer
set search_path = public
as $function$
declare
  ticket text;
begin
  ticket := upper(trim(intake_row->>'id'));
  if ticket !~ '^WB-REF-[0-9]{6}$' then
    raise exception 'Invalid intake reference';
  end if;
  if coalesce((intake_row->>'consent_given')::boolean, false) is not true then
    raise exception 'Affirmative consent is required';
  end if;
  if nullif(trim(intake_row->>'citizen_name'), '') is null
     or nullif(trim(intake_row->>'phone'), '') is null
     or nullif(trim(intake_row->>'district'), '') is null
     or nullif(trim(intake_row->>'subcategory_title'), '') is null
     or intake_row->>'preferred_aid_type' not in ('DLSA', 'ADVOCATE') then
    raise exception 'Invalid intake fields';
  end if;

  insert into public.case_intakes (
    id, citizen_name, phone, district, subcategory_title, brief_summary,
    is_bpl, preferred_aid_type, consent_given, "timestamp"
  ) values (
    ticket,
    trim(intake_row->>'citizen_name'),
    trim(intake_row->>'phone'),
    trim(intake_row->>'district'),
    trim(intake_row->>'subcategory_title'),
    coalesce(intake_row->>'brief_summary', ''),
    coalesce((intake_row->>'is_bpl')::boolean, false),
    intake_row->>'preferred_aid_type',
    coalesce((intake_row->>'consent_given')::boolean, false),
    intake_row->>'timestamp'
  );

  insert into public.case_intake_ip_audit as ip_existing (ticket_id, client_ipv4, ip_capture_status)
  values (ticket, client_ipv4, case when client_ipv4 is null then 'unavailable' else 'captured' end)
  on conflict (ticket_id) do nothing;
exception
  when unique_violation then
    -- The case insert and IP record are one transaction; ticket collision rolls back both.
    raise exception 'Duplicate intake reference; retry with a new reference';
end;
$function$;

revoke all on function public.create_case_intake_with_ipv4(jsonb, inet) from public, anon, authenticated;
grant execute on function public.create_case_intake_with_ipv4(jsonb, inet) to service_role;
