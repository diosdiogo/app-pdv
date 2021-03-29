import axios from 'axios';

const api = axios.create({
    //baseURL: 'https://gerenciador.prestes.com/api/',
    //baseURL: 'https://prestes.com/gerenciador2/public/api/',  
    baseURL: 'http://127.0.0.1:3001/api/',
});

export default api;