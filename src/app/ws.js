import { getMessage } from "../actions/message";
import { setSocket } from "../reducers/messageReducer"
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
            console.log('Socket открыт ' + user?.id)
            const message = {
                event: 'connection',
                userId: user?.id,
            }
            socket.send(JSON.stringify(message))
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