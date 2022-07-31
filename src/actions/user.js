import axios from 'axios'
import { setUser, setUserList, setUserExtend } from "../reducers/userReducer";
import { setProcessStatus } from "../reducers/appReducer";
import { API_URL } from "../utils/config";
import { $authHost, $host } from '.';
import requestWithStatus from '../utils/requestWithStatus';

export const registration = (phon, password, name, surname) => {
    return async dispatch => {
        function requestFunction() {
            return $authHost.post(`api/user/registration`, {
                phon,
                password,
                name,
                surname
            })
        }
        const response = await requestWithStatus(requestFunction, 0)
        dispatch(setUserList(response.data))
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
            console.log(e?.response?.data?.message)
        }
    }
}

export const deleteAvatar = () => {
    return async dispatch => {
        try {
            const response = await $authHost.delete(`api/files/avatar`)
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e?.response?.data?.message)
        }
    }
}

export const getUserList = () => {
    return async dispatch => {
        try {
            const response = await $authHost.get(`api/user/userList`)
            dispatch(setUserList(response.data))
        }
        catch (e) {
            console.log(e?.response?.data?.message)
        }
    }
}

export const saveUserChanges = (id, form) => {
    return async dispatch => {
        function requestFunction() {
            return $authHost.put('api/user/user', {
                id,
                phon: form.phon,
                name: form.name,
                surname: form.surname
            })
        }
        const response = await requestWithStatus(requestFunction, 0)
        dispatch(setUserList(response.data))
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        try {
            console.log('ffss' + id)
            const response = await $authHost.delete(`api/user/user?id=${id}`)
            dispatch(setUserList(response.data))
            alert('Пользователь успешно удален')
        }
        catch {
            alert('Ошибка при удалении пользователя')
        }
    }
}

export const changePassword = (id, password) => {
    return async dispatch => {
        try {
            dispatch(setProcessStatus({ index: 1, state: 'Processing' }))
            const response = await $authHost.put('api/user/changePassword',
                {
                    id,
                    password,
                })
            dispatch(setProcessStatus({ index: 1, state: 'Success' }))
        }
        catch (e) {
            console.log(e?.response?.data?.message)
            dispatch(setProcessStatus({ index: 1, state: 'Error' }))
        }
    }
}

export const getUserExtend = (id, folder) => {
    return async dispatch => {
        try {
            const response = await $authHost.get(`api/user/getUserExtend?userId=${id}&folder=${folder}`)
            dispatch(setUserExtend(response.data))
        }
        catch (e) {
            console.log(e?.response?.data?.message)
        }
    }
}
