export const createAuthCookie = (token) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 7 days from now

  const cookieValue = encodeURIComponent(token);
  document.cookie = `authToken=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict; Secure`;

  console.log(document.cookie);
};

export const checkAuthCookie = () => {
  const cookies = document.cookie.split(';');
  const authCookie = cookies.find(cookie => cookie.trim().startsWith('authToken='));

  if (!authCookie) {
    return null; // Cookie not found
  }

  const [, token] = authCookie.split('=');
  const decodedToken = decodeURIComponent(token);

  // Check if the cookie has expired
  const expirationMatch = document.cookie.match(/expires=([^;]+)/);
  if (!expirationMatch) {
    return null; // Expiration date not found
  }

  const expirationDate = new Date(expirationMatch[1]);
  if (expirationDate < new Date()) {
    return null; // Cookie has expired
  }

  return decodedToken;
};
