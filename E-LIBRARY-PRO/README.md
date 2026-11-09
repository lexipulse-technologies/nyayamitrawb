# NyayaMitra E-Library PRO

**Comprehensive Legal Resource Library for West Bengal Civil Law**

## 📚 Overview

The E-Library PRO is a comprehensive digital repository of all statutes, regulations, rules, and judicial precedents referenced across the NyayaMitra website's 300 civil legal workflows across 6 categories (Land, Tenancy, Consumer, Money, Family, Partition).

## 🗂️ Repository Structure

```
E-LIBRARY-PRO/
├── LEGAL_ACTS_INVENTORY.md      # Complete markdown inventory of all 280+ acts
├── INDEX.json                   # Machine-readable index for programmatic access
├── STATUTES/
│   ├── Central_Acts/
│   │   ├── Criminal_Law_2023/   # BNS, BNSS, BSA 2023
│   │   ├── Civil_Procedure/     # CPC, Limitation, SRA, Registration
│   │   ├── Property_Law/        # TP Act, Easements, Stamp, Partition, Trusts
│   │   ├── Family_Law/          # HMA, HSA, ISA, SMA, GWA, PWDVA, etc.
│   │   ├── Commercial_Law/      # Contract, NI Act, IBC, SARFAESI, Arbitration
│   │   └── Consumer_Protection/ # CPA 2019, RERA, FSSAI, IRDAI, IT Act
│   ├── West_Bengal_Acts/
│   │   ├── Land_Reforms/        # WBLR Act, Manual, Bhudan, Trees, Ground Water
│   │   ├── Tenancy/             # WBPT 1997, Thika 2001, Slum, PPE
│   │   ├── Municipal/           # KMC Act, WB Municipal, HMC, BMC
│   │   └── Special_Acts/        # Apartment Ownership, Clinical Est, Waqf, FRA
│   ├── Regulations_Rules/
│   │   ├── CPC_Orders/          # CPC Orders XXXIX, XXI, XX, XXVI, XXXIV
│   │   ├── RBI_Guidelines/      # Master Directions, Circulars, Digital Lending
│   │   ├── IRDAI_Regulations/   # IRDAI Act, Health Insurance, Agents
│   │   ├── SEBI_Regulations/    # Stock Brokers, SCORES, CICRA
│   │   └── CCPA_Guidelines/     # CCPA 2024, Dark Patterns, Coaching
│   └── Judicial_Precedents/
│       ├── Supreme_Court/       # Key SC judgments referenced in codebase
│       ├── High_Courts/         # Calcutta HC judgments
│       └── Tribunals/           # NCLT, NCLAT, SAT, TDSAT, RERA
├── DOWNLOADED_PDFS/             # Actual PDF files from indiacode.gov.in
├── INDEX.json                   # Machine-readable index (this file's source)
├── LEGAL_ACTS_INVENTORY.md      # Human-readable complete inventory
└── README.md                    # This file
```

## 📋 Inventory Summary

| Metric | Count |
|--------|-------|
| Total Unique Acts/Statutes | 280+ |
| Central Acts | 145 |
| West Bengal Specific Acts | 42 |
| Regulations & Rules | 58 |
| Judicial Precedents | 35 |
| Total Workflows Covered | 300 |
| Categories | 6 |

## 🎯 Categories Covered

1. **Land** (45+ acts) — WBLR Act 1955, KMC Act 1980, WBPT Act 1997
2. **Tenancy** (35+ acts) — WBPT Act 1997, WB Thika Act 2001
3. **Consumer** (40+ acts) — CPA 2019, RERA 2016, WB Clinical Act 2017
4. **Money** (50+ acts) — NI Act 1881, IBC 2016, SARFAESI 2002
5. **Family** (45+ acts) — HMA 1955, HSA 1956, PWDVA 2005, BNSS 2023
6. **Partition** (30+ acts) — ISA 1925, HSA 1956, Partition Act 1893

## 🔍 Source Attribution

All acts identified from the NyayaMitra codebase (`src/data/categories/`) where each of the 300 workflows includes a `relevant_act` field citing the governing statute(s).

## 📥 Download Instructions

### Manual Download from indiacode.gov.in

1. Visit https://indiacode.gov.in/home
2. Search for each act by name/year
3. Download the official PDF (bare act version)
4. Save to appropriate folder under `STATUTES/` or `DOWNLOADED_PDFS/`

### Priority Download Order

1. **High Priority (Core Acts)**
   - BNS 2023, BNSS 2023, BSA 2023
   - CPC 1908, Limitation Act 1963, Specific Relief Act 1963
   - Indian Contract Act 1872, Transfer of Property Act 1882
   - Hindu Marriage Act 1955, Hindu Succession Act 1956
   - Indian Succession Act 1925, CPA 2019
   - NI Act 1881, IBC 2016, SARFAESI 2002

2. **West Bengal Specific (High Priority for WB Jurisdiction)**
   - WB Land Reforms Act 1955
   - WB Premises Tenancy Act 1997
   - WB Thika Tenancy Act 2001
   - KMC Act 1980
   - WB Apartment Ownership Act 1972

3. **New Criminal Codes (2023) - Critical**
   - Bharatiya Nyaya Sanhita 2023 (BNS)
   - Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS)
   - Bharatiya Sakshya Adhiniyam 2023 (BSA)

## 📄 File Naming Convention

```
{Short_Name}_{Year}.pdf
Examples:
- BNS_2023.pdf
- WBLR_Act_1955.pdf
- CPC_1908.pdf
- Hindu_Marriage_Act_1955.pdf
- CPA_2019.pdf
```

## 🔧 Integration with NyayaMitra

The E-Library PRO is designed to integrate with:

1. **DocumentDrafterModal** — "Cite as you draft" feature
2. **LegalPolicyModal** — Statute reference links
3. **Search/Chat** — RAG grounding with statutory text
4. **Admin Panel** — Act management dashboard

## 📊 Download Status Tracking

See `INDEX.json` → `download_status` for real-time tracking:
- `total_expected`: 280
- `downloaded`: 0
- `pending`: 280

## 🛡️ Legal Compliance

- All PDFs sourced from official Government of India portal (indiacode.gov.in)
- Bare acts only — no commentary or private publications
- For reference/educational use within NyayaMitra platform
- Attribution to Legislative Department, Ministry of Law & Justice, Govt. of India

## 🔗 Key Resources

- **Primary Source**: https://indiacode.gov.in/home
- **NyayaMitra Production**: https://nyayamitrawb.in
- **GitHub Repository**: https://github.com/abhiroop786/nyayamitra
- **Legislative Department**: http://legislative.gov.in/

## 📝 Maintenance

- Update INDEX.json when new acts added to website
- Re-scan codebase quarterly for new `relevant_act` references
- Verify PDF integrity annually
- Track legislative amendments (especially 2023 criminal codes)

---

**Last Updated**: 2026-10-27  
**Version**: 1.0  
**Maintainer**: NyayaMitra Engineering Team  
**Classification**: Internal Technical Reference