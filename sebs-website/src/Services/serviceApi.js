// Service API for fetching services and highlights
import { apiFetch } from '../Utils/apiConfig.js';

export function fetchServices() {
  return apiFetch('/api/Public/services');
}

export function fetchHighlights() {
  return apiFetch('/api/Public/highlights');
}

export function fetchBookedDates() {
  const endpoints = [
    '/api/Public/booked-dates',
    '/api/booking/booked-dates',
    '/api/bookings/booked-dates',
  ];

  const tryEndpoint = (index) => {
    if (index >= endpoints.length) {
      return Promise.resolve([]);
    }

    return apiFetch(endpoints[index]).catch((error) => {
      if (error?.status === 404) {
        return tryEndpoint(index + 1);
      }
      return Promise.reject(error);
    });
  };

  return tryEndpoint(0);
}
