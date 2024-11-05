export async function getPerms() {
  return fetch('http://localhost:8080/check-perms', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch permissions');
    }
    return response.json();
  });
}
