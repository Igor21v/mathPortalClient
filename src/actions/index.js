import axios from "axios";
import { API_URL } from "../config";

const $host = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

const $authHost = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$authHost.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authHost.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        console.log('Запрос рефреш токена')
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}api/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.token);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    }
    throw error;
})

export {
    $host,
    $authHost
}