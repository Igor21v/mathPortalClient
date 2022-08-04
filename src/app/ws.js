import { setMessage, setSocket } from "../reducers/messagesReducer"
import { WS_API_URL } from "../utils/config";

export default function () {
    return dispatch => {
        const socket = new WebSocket(`${WS_API_URL}connectionWS`)
        dispatch(setSocket(socket))
        socket.onopen = () => {
            const message = {
                event: 'connection',
                username: 'ffff',
                id: Date.now()
            }
            socket.send(JSON.stringify(message))
            console.log('Socket открыт')
        }
        socket.onmessage = (event) => {
            const message = JSON.parse(event.data)
            dispatch(setMessage(message))
        }
        socket.onclose = () => {
            console.log('Socket закрыт')
        }
        socket.onerror = () => {
            console.log('Socket произошла ошибка')
        }
    }
}