import axios from "axios";
import {API_URL} from "../config";
import { setThemes } from "../reducers/themeReduser";

export function getThemes (showAll) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/theme`,{
                params: {
                showThemes: ''

            }}, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(setThemes(response.data))
            
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}
