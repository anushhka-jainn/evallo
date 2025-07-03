import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchLogs = (params) => {
  return axios.get(`${API_BASE}/logs`, { params })
    .then(res => res.data);
};