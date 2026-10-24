import crypto from 'node:crypto';

const memoryStore = globalThis.__NYAYAMITRA_LOCAL_INTAKES__ || new Map();
globalThis.__NYAYAMITRA_LOCAL_INTAKES__ = memoryStore;

export function isLocalIntakeMockEnabled(env = process.env) {
  return env.NODE_ENV === 'development'
    && env.NYAYAMITRA_ENABLE_LOCAL_INTAKE_MOCK === 'true';
}

export function localIntakeMockRecord(payload, ticketId, env = process.env) {
  const useTestIp = env.NYAYAMITRA_DEV_MOCK_IPV4 === 'true';
  const item = {
    id: ticketId,
    citizenName: payload.citizenName.trim(),
    phone: payload.phone.trim(),
    district: payload.district.trim(),
    subcategoryTitle: payload.subcategoryTitle.trim(),
    briefSummary: (payload.briefSummary || '').trim(),
    isBPL: payload.isBPL === true,
    preferredAidType: payload.preferredAidType,
    consentGiven: true,
    timestamp: new Date().toISOString(),
    ipCaptureStatus: useTestIp ? 'mocked' : 'unavailable'
  };
  memoryStore.set(item.id, {
    ...item,
    clientIpv4: useTestIp ? '198.51.100.23' : null,
    capturedAt: item.timestamp
  });
  return item;
}

export function getLocalMockIpv4(tickets, env = process.env) {
  const mockEnabled = isLocalIntakeMockEnabled(env);
  return tickets.map(ticketId => {
    const entry = memoryStore.get(String(ticketId).toUpperCase());
    return entry ? {
      ticketId: entry.id,
      clientIpv4: mockEnabled ? entry.clientIpv4 : null,
      ipCaptureStatus: entry.ipCaptureStatus === 'mocked' && mockEnabled ? 'mocked' : entry.ipCaptureStatus,
      capturedAt: entry.capturedAt
    } : null;
  }).filter(Boolean);
}

export function createLocalTicketId() {
  return `WB-REF-${crypto.randomInt(100000, 1000000)}`;
}
