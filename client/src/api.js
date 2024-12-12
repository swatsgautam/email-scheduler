import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const scheduleEmail = async (emailData) => {
    try {
        const response = await axios.post(`${API_URL}/schedule`, emailData);
        return response.data;
    } catch (error) {
        console.error('Error scheduling email:', error);
    }
};

export const getEmails = async () => {
    try {
        const response = await axios.get(`${API_URL}/emails`);
        return response.data;
    } catch (error) {
        console.error('Error fetching emails:', error);
    }
};
