import axios from 'axios';

export const api = {
    get: (url, config) => axios.get(url, config),
    post: (url, config, data) => axios.post(url, config, data),
};