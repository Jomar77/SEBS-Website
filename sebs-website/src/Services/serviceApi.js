// Service API for fetching services
export function fetchServices() {
  return fetch(`${import.meta.env.VITE_SEBS_API_URL}/api/Public/services`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)));
}
