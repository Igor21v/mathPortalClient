import axios from 'axios'
import { setUser } from "../reducers/userReducer";
import { API_URL } from "../config";
import { $authHost, $host } from '.';

export const registration = async (phon, password, name, surname) => {
    try {
        const response = await $authHost.post(`api/auth/registration`, {
            phon,
            password,
            name,
            surname
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

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
            const response = await $authHost.get(`api/auth/auth`)
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar = (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await $authHost.post(`api/files/avatar`, formData)
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await $authHost.delete(`api/files/avatar`)
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
