import axios from "axios";
import { API_URL } from "../config";
import { setProcessStatus, setTheme, setListThemes } from "../reducers/themeReduser";
import { hideLoader, showLoader } from "../reducers/appReducer";

export function getTheme(themeId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/theme`, {
                params: {
                    themeId: themeId
                }
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(setTheme(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export function getListThemes(showThemes, searchTheme) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/theme/getListThemes`, {
                params: {
                    showThemes: showThemes,
                    searchTheme: searchTheme,
                }
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(setListThemes(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
        }
        finally {
            dispatch(hideLoader())
        }
    }
}

export function addTheme(name, discription) {
    return async dispatch => {
        try {
            dispatch(setProcessStatus('Processing'))
            console.log('555 ' + name + '  ' + discription)
            const response = await axios.post(`${API_URL}api/theme`, {
                name: name,
                discription: discription
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(response.data)
            dispatch(setProcessStatus('Success'))
        }
        catch (e) {
            alert(e.response.data.message)
            dispatch(setProcessStatus("Error"))
        }
    }
}

export function postFile(themeId, file) {
    return async dispatch => {
        try {
            console.log('add picture ' + themeId)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('themeId', themeId)
            console.log('Отправка запроса ' + formData)
            const response = await axios.post(`${API_URL}api/theme/postFile`, formData
                , {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                })
            dispatch(setTheme(response.data))
            console.log('Ответ сервера: ' + response.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}

export async function postPicture(themeId, file) {
    try {
        console.log('add picture ' + themeId)
        const formData = new FormData()
        formData.append('file', file)
        formData.append('themeId', themeId)
        console.log('Отправка запроса ' + formData)
        const response = await axios.post(`${API_URL}api/theme/postPicture`, formData
            , {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
        console.log('Ответ сервера: ' + response.data)
    }
    catch (e) {
        alert('Ошибка: ' + e.response.data.message)
    }
}

export function editTheme(theme) {
    return async dispatch => {
        try {
            dispatch(setProcessStatus('Processing'))
            console.log('111 ' + theme)
            const response = await axios.put(`${API_URL}api/theme/edit`, {
                ...theme
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(response.data)
            dispatch(setProcessStatus('Success'))
        }
        catch (e) {
            alert(e.response.data.message)
            dispatch(setProcessStatus("Error"))
        }
    }
}

export async function deleteTheme(id) {
    try {
        console.log('delete: ' + id)
        const response = await axios.delete(`${API_URL}api/theme/deleteTheme?id=${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        alert(response.data)
    } catch (error) {
        alert(error?.response?.data?.message)
    }
}

export function deleteThemeFile(themeId, nameFile) {
    return async dispatch => {
        try {
            console.log('delete: theme - ' + themeId + 'file - ' + nameFile)
            const response = await axios.delete(`${API_URL}api/theme/deleteFile?themeId=${themeId}&nameFile=${nameFile}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(setTheme(response.data))
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }
}