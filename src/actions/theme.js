import axios from "axios";
import {API_URL} from "../config";
import { setThemes } from "../reducers/themeReduser";

export function getThemes (showThemes, searchTheme) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/theme`,{
                params: {
                showThemes: showThemes,
                searchTheme: searchTheme
            }}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            console.log('Выполнен запрос тем')
            dispatch(setThemes(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}

export async function addTheme (name, discription) {
        try {
            console.log('555 ' + name + '  ' + discription)
            const response = await axios.post(`${API_URL}api/theme`,{
                name: name,
                discription: discription
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
        console.log(response.data)
        }     
        catch (e) {
            alert(e.response.data.message)
    }
}
