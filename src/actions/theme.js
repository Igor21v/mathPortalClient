import axios from "axios";
import {API_URL} from "../config";

export function getThemes (showAll) {
    return async dispatch => {
        try {
            let url;
            if (showAll) {
                url = `${API_URL}api/theme`, {
                    showAll
                }
            }
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
}
