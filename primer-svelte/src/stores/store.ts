import { writable } from "svelte/store";
import  axios  from "axios"; 
export const showDashboar = writable(true);
export const axiosTools = axios.create({

       baseURL: 'http://localhost:8080/',
     })
     axiosTools.interceptors.request.use((config) => {
       const token = localStorage.getItem('token');
       console.log(token);
       if (token) {
         config.headers.Authorization = `Bearer ${token}`;
       }
       return config;
     }, (error) => {
       return Promise.reject(error);
     });