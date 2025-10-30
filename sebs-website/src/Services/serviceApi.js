// Service API for fetching services and highlights
import { apiFetch } from '../Utils/apiConfig.js';

export function fetchServices() {
  return apiFetch('/api/Public/services');
}

export function fetchHighlights() {
  return apiFetch('/api/Public/highlights');
}
