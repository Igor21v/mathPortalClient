import { setTheme, addListThemes, setAmountThemes, setFetchingThemes, setListThemes } from "../reducers/themeReducer";
import { hideLoader, showLoader } from "../reducers/appReducer";
import { $authHost, $host } from ".";
import requestWithStatus from "../utils/requestWithStatus";

export function getTheme(themeId) {
    return async dispatch => {
        try {
            const response = await $host.get(`api/theme`, {
                params: {
                    themeId: themeId
                }
            })
            dispatch(setTheme(response.data))
        }
        catch (e) {
            console.log(e?.response?.data?.message)
        }
    }
}

export function getListThemes(showThemes, searchTheme, page) {
    return async dispatch => {
        try {
            dispatch(setFetchingThemes(true))
            const response = await $host.get(`api/theme/getListThemes`, {
                params: {
                    showThemes,
                    searchTheme,
                    page
                }
            })
            dispatch(addListThemes(response.data.themeList))
            dispatch(setAmountThemes(response.data.amount))
        }
        catch (e) {
            console.log(e?.response?.data?.message)
        }
        finally {
            await dispatch(setFetchingThemes(false))
        }
    }
}

export function addTheme(name, discription) {
    return async dispatch => {
        console.log('555 ' + name + '  ' + discription)
        function requestFunction() {
            return $authHost.post(`api/theme`, {
                name: name,
                discription: discription
            })
            }
        const response = await requestWithStatus(requestFunction, 0)
        console.log(response.data)
        dispatch(setTheme(response.data))
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
            alert(e?.response?.data?.message)
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
            console.log('Ошибка: ' + e?.response?.data?.message)
        }
    }
}

export async function editTheme(theme) {
    function requestFunction() {
        return $authHost.put(`api/theme/edit`, {
            ...theme
        })
    }
    const response = await requestWithStatus(requestFunction, 0)
    console.log('response ' + response.data)
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
            console.log(error?.response?.data?.message)
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