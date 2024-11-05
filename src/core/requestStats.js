export async function getSystemStats() {
  return fetch('http://localhost:8080/system-stats', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch system stats');
    }
    return response.json();
  });
}
