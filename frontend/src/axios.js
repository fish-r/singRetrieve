import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json', // Set default headers for all requests
        // Add other default headers if needed
    },
});

export default axiosInstance