import axios from 'axios'
import { setUser, setUserList } from "../reducers/userReducer";
import { setProcessStatus } from "../reducers/appReducer";
import { API_URL } from "../config";
import { $authHost, $host } from '.';

export const login = (phon, password) => {
    return async dispatch => {
        try {
            const response = await $host.post(`api/auth/login`, {
                phon,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await $authHost.get(`api/auth/refresh`)
            console.log(response)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

/* export const refresh  */
