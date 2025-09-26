// API Configuration - Environment-based URL handling
// Uses VITE_SEBS_API_URL for all environments (set in Vercel dashboard for production)

/**
 * Get the appropriate API base URL based on environment variables
 * @returns {string} The API base URL
 */
export function getApiUrl() {
  const apiUrl = import.meta.env.VITE_SEBS_API_URL;
  
  if (!apiUrl) {
    console.warn('VITE_SEBS_API_URL not set, falling back to localhost');
    return 'http://localhost:5139';
  }
  
  return apiUrl;
}

/**
 * Generic fetch wrapper with environment-aware API URL
 * @param {string} endpoint - The API endpoint path
 * @param {RequestInit} options - Fetch options
 * @returns {Promise} Fetch promise
 */
export function apiFetch(endpoint, options = {}) {
  const baseUrl = getApiUrl();
  const url = `${baseUrl}${endpoint}`;
  
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }).then((res) => (res.ok ? res.json() : Promise.reject(res)));
}