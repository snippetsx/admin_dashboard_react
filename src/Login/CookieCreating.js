export const createAuthCookie = (token) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 7 days from now

  const cookieValue = encodeURIComponent(token);
  const cookieString = `authToken=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/; SameSite=Strict; Secure; domain=admin.lcsa.ru`;

  document.cookie = cookieString;
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
  const expirationDate = new Date(document.cookie.match(/expires=([^;]+)/)[1]);
  if (expirationDate < new Date()) {
    return null; // Cookie has expired
  }

  return decodedToken;
};
