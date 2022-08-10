import { getMessage } from "../actions/messages";
import { setMessage, setSocket } from "../reducers/messagesReducer"
import { WS_API_URL } from "../utils/config";

export default function (user, socket) {
    return dispatch => {
        console.log('socket.readyState ' + socket?.readyState)
        if (socket?.readyState === 1) {
            socket.close()
            console.log('Сокет принудительно закрывается')
        } else {
            socket = new WebSocket(`${WS_API_URL}connectionWS`)
        }
        dispatch(setSocket(socket))
        socket.onopen = () => {
            console.log('Socket открыт1')
            const message = {
                event: 'connection',
                username: 'ffff',
                id: Date.now(),
                userId: user?.id
            }
            socket.send(JSON.stringify(message))
            console.log('Socket открыт2')
        }
        socket.onmessage = (event) => {
            getMessage(event, dispatch)
        }
        socket.onclose = () => {
            console.log('Socket закрыт')
            if (user.id) {
                socket = new WebSocket(`${WS_API_URL}connectionWS`)
                console.log('Открытие сокета повторно')
            }
        }
        socket.onerror = () => {
            console.log('Socket произошла ошибка')
        }
    }
}