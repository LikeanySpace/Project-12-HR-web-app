export async function connectIntegration(service) {
  // Placeholder for future API integration
  return new Promise(resolve => {
    setTimeout(() => resolve({ ok: true, service, timestamp: Date.now() }), 900);
  });
}

export async function fetchRemoteEmployees() {
  // Simulated fetch from external HR system
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Staff' },
      { name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Manager' }
    ]), 700);
  });
}
