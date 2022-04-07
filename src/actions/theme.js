import axios from "axios";
import { API_URL } from "../config";
import { setAddStatus, setThemes } from "../reducers/themeReduser";

export function getThemes(showThemes, searchTheme) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/theme`, {
                params: {
                    showThemes: showThemes,
                    searchTheme: searchTheme
                }
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            console.log('Выполнен запрос тем')
            dispatch(setThemes(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
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
