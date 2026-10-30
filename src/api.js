/**
 * Centralized API service for Aurevia Estates frontend.
 * Reads backend URL from import.meta.env.VITE_API_URL, defaulting to local FastAPI.
 */
const BASE_URL = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

async function handleResponse(response) {
  if (!response.ok) {
    let errorDetail = response.statusText;
    try {
      const errorJson = await response.json();
      if (errorJson.detail) {
        errorDetail = typeof errorJson.detail === 'string'
          ? errorJson.detail
          : JSON.stringify(errorJson.detail);
      }
    } catch {
      // ignore json parse error
    }
    const error = new Error(errorDetail || `HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export const api = {
  getBaseUrl() {
    return BASE_URL;
  },

  async getHealth() {
    const res = await fetch(`${BASE_URL}/api/health`);
    return handleResponse(res);
  },

  async getFeatures() {
    const res = await fetch(`${BASE_URL}/api/features`);
    return handleResponse(res);
  },

  async getMetrics() {
    const res = await fetch(`${BASE_URL}/api/models/metrics`);
    return handleResponse(res);
  },

  async getDatasetSummary() {
    const res = await fetch(`${BASE_URL}/api/dataset/summary`);
    return handleResponse(res);
  },

  async predictPrice(payload) {
    const res = await fetch(`${BASE_URL}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return handleResponse(res);
  },
};

export default api;
