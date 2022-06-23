import axios from "axios";
import { API_URL } from "../config";
import { store } from "../reducers";
import { clearDataUser } from "../reducers/userReducer";

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
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}api/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.token);
            return $authHost.request(originalRequest);
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
        }
    } 
    if (error.response.status == 401) store.dispatch(clearDataUser())
    throw error
    
})

export {
    $host,
    $authHost
}