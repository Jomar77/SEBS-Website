// Service API for fetching services
import { apiFetch } from '../Utils/apiConfig.js';

export function fetchServices() {
  return apiFetch('/api/Public/services');
}
