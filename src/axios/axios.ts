import axios from 'axios';

export const axiosClient = axios.create();
axiosClient.defaults.baseURL = 'https://rickandmortyapi.com/api';
