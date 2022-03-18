import axios from "axios";
import {API_URL} from "../config";

export function getThemes (showAll) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/theme`,{
                showAll: showAll,
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addFile(response.data))
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}
