// API Configuration - Environment-based URL handling
// For security: Production URL is hardcoded (not exposed via environment variables)
// Development uses VITE_SEBS_API_URL for flexibility

/**
 * Get the appropriate API base URL based on the environment
 * @returns {string} The API base URL
 */
export function getApiUrl() {
  const mode = import.meta.env.MODE;
  
  if (mode === 'production') {
    // Hardcoded production URL - not exposed in environment variables for security
    return 'https://your-production-api.com'; // Replace with your actual production API URL
  } else {
    // Development/preview - use environment variable for flexibility
    return import.meta.env.VITE_SEBS_API_URL || 'http://localhost:3000';
  }
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