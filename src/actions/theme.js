import axios from "axios";
import { API_URL } from "../config";
import { setProcessStatus, setTheme, setListThemes } from "../reducers/themeReduser";
import { hideLoader, showLoader } from "../reducers/appReducer";
import { $authHost, $host } from ".";

export function getTheme(themeId) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await $host.get(`api/theme`, {
                params: {
                    themeId: themeId
                }
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
            const response = await $host.get(`api/theme/getListThemes`, {
                params: {
                    showThemes: showThemes,
                    searchTheme: searchTheme,
                }
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
            const response = await $authHost.post(`api/theme`, {
                name: name,
                discription: discription})
            console.log(response.data)
            dispatch(setProcessStatus('Success'))
            dispatch(setTheme(response.data))
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
            const response = await $authHost.post(`api/theme/postFile`, formData)
            dispatch(setTheme(response.data))
            console.log('Ответ сервера: ' + response.data)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function postPicture(theme, file) {
    return async dispatch => {
        try {
            dispatch(setTheme(theme))
            console.log('add picture ' + theme._id)
            const formData = new FormData()
            formData.append('file', file)
            formData.append('themeId', theme._id)
            console.log('Отправка запроса ' + formData)
            const response = await $authHost.post(`api/theme/postPicture`, formData)
            dispatch(setTheme(response.data))
            console.log('Ответ сервера: ' + response.data)
        }
        catch (e) {
            alert('Ошибка: ' + e.response.data.message)
        }
    }
}

export function editTheme(theme) {
    return async dispatch => {
        try {
            dispatch(setProcessStatus('Processing'))
            console.log('111 ' + theme)
            const response = await $authHost.put(`api/theme/edit`, {
                ...theme
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
        const response = await $authHost.delete(`api/theme/deleteTheme?id=${id}`)
        alert(response.data)
    } catch (error) {
        alert(error?.response?.data?.message)
    }
}

export function deletePicture(theme) {
    return async dispatch => {
        try {
            console.log('deletePic: ' + theme._id)
            const response = await $authHost.delete(`api/theme/deletePicture?themeId=${theme._id}`)
            dispatch(setTheme(response.data))
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }
}

export function deleteThemeFile(themeId, nameFile) {
    return async dispatch => {
        try {
            console.log('delete: theme - ' + themeId + 'file - ' + nameFile)
            const response = await $authHost.delete(`api/theme/deleteFile?themeId=${themeId}&nameFile=${nameFile}`)
            dispatch(setTheme(response.data))
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }
}