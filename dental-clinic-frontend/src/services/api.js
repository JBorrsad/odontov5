// src/services/api.js
import axios from 'axios';

const API_URL = 'YOUR_BACKEND_API_URL'; // Replace with your backend API URL

const api = axios.create({
  baseURL: API_URL,
});

export const getPatients = async () => {
  try {
    const response = await api.get('/patients'); // Adjust endpoint as needed
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getDoctors = async () => {
    try {
        const response = await api.get('/doctors'); // Adjust endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
    }
};

export const getAppointments = async () => {
    try {
        const response = await api.get('/appointments'); // Adjust endpoint
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error;
    }
};

export const getPatientById = async (id) => {
    try {
        const response = await api.get(`/patients/${id}`); // Adjust endpoint
        return response.data;
    } catch (error) {
        console.error(`Error fetching patient with ID ${id}:`, error);
        throw error;
    }
};

export const getOdontogramByPatientId = async (patientId) => {
    try {
        const response = await api.get(`/patients/${patientId}/odontogram`); // Adjust endpoint
        return response.data;
    } catch (error) {
        console.error(`Error fetching odontogram for patient ${patientId}:`, error);
        throw error;
    }
};

export default api; // Export the configured axios instance as well