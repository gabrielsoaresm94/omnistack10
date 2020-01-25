import axios from 'axios';

const api = axios.create({
	baseURL: 'http://192.168.25.113:3333'
});

export default api;

//http://192.168.25.113:3333
//http://localhost:3333
