import axios from 'axios'
import { setUser, setUserList } from "../reducers/userReducer";
import { setProcessStatus } from "../reducers/appReducer";
import { API_URL } from "../config";
import { $authHost, $host } from '.';

export const registration = (phon, password, name, surname) => {
    return async dispatch => {
        try {
            dispatch(setProcessStatus('Processing'))
            const response = await $authHost.post(`api/auth/registration`, {
                phon,
                password,
                name,
                surname
            })
            dispatch(setProcessStatus('Success'))
            dispatch(setUserList(response.data))
        } catch (e) {
            alert(e.response.data.message)
            dispatch(setProcessStatus("Error"))
        }
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

export const getUserList = () => {
    return async dispatch => {
        try {
            const response = await $authHost.get(`api/auth/userList`)
            dispatch(setUserList(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const saveUserChanges = (id, form) => {
    return async dispatch => {
        try {
            dispatch(setProcessStatus('Processing'))
            const response = await $authHost.put('api/auth/user', {
                id,
                phon: form.phon,
                name: form.name,
                surname: form.surname
            })
            dispatch(setUserList(response.data))
            dispatch(setProcessStatus('Success'))
        }
        catch (e) {
            alert(e.response.data.message)
            dispatch(setProcessStatus('Error'))
        }
    }
}

export const deleteUser = (id) => {
    return async dispatch => {
        try {
            console.log('ffss' + id)
            const response = await $authHost.delete(`api/auth/user?id=${id}`)
            dispatch(setUserList(response.data))
            alert('Пользователь успешно удален')
        }
        catch {
            alert('Ошибка при удалении пользователя')
        }
    }

}
