import axios from "axios";
import { API_URL } from "../config";
import { setAddStatus, setTheme, setListThemes } from "../reducers/themeReduser";
import {hideLoader, showLoader} from "../reducers/appReducer";

export function getTheme(searchThemeID) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`${API_URL}api/theme`, {
                params: {
                    searchThemeID: searchThemeID
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
            console.log('555 ' + name + '  ' + discription)
            const response = await axios.post(`${API_URL}api/theme`, {
                name: name,
                discription: discription
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(response.data)
            dispatch(setAddStatus('Success'))
        }
        catch (e) {
            alert(e.response.data.message)
            dispatch(setAddStatus("Error"))
        }
    }
}

export function editTheme(theme) {
    return async dispatch => {
        try {
            dispatch(setAddStatus('Performing edit')) 
            console.log('111 ' + theme)
            const response = await axios.put(`${API_URL}api/theme/edit`, {
                ...theme
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log(response.data)
             dispatch(setAddStatus('Success edit')) 
        }
        catch (e) {
            alert(e.response.data.message)
            dispatch(setAddStatus("Error edit")) 
        }
    }
}

export async function deleteTheme(id) {
    try {
        console.log('delete: ' + id)
        const response = await axios.delete(`${API_URL}api/theme/deleteTheme?id=${id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        alert(response.data)
    } catch (error) {
        alert(error?.response?.data?.message)
    }
}
