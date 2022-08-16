import { getMessage } from "../actions/message";
import { setSocket } from "../reducers/messageReducer"
import { WS_API_URL } from "../utils/config";
import { store } from "../reducers";

export default function (user, socket, timerReopenSocket) {
    console.log('socket.readyState ' + socket?.readyState)
    if (socket?.readyState === 1) {
        socket.close()
        console.log('Сокет принудительно закрывается ' + timerReopenSocket)
        clearTimeout(timerReopenSocket)     
    } else if (user?.id) {
        socket = new WebSocket(`${WS_API_URL}connectionWS`)
    }
    addEventListener(user, socket)
    store.dispatch(setSocket(socket))
}

function addEventListener(user, socket, timerReopenSocket) {
    console.log('lll'  + timerReopenSocket)
    socket.onclose = (event) => {
        console.log('Socket закрыт с кодом ' + event.code)
        if (user?.id) {
            setTimeout(function reopenSocket () {
                socket = new WebSocket(`${WS_API_URL}connectionWS`)
                timerReopenSocket = setTimeout(reopenSocket, 20000)
                addEventListener(user, socket, timerReopenSocket)
                store.dispatch(setSocket(socket))
                console.log('Socket переоткрыт ' + timerReopenSocket)
            }, 5000)

        }
    }
    socket.onopen = () => {
        clearTimeout(timerReopenSocket)
        console.log('Socket открыт ' + timerReopenSocket)
        const message = {
            event: 'connection',
            userId: user?.id,
            accessToken: localStorage.getItem('token'),
        }
        socket.send(JSON.stringify(message))
    }
    socket.onmessage = (event) => {
        getMessage(event, store.dispatch)
    }
    socket.onerror = () => {
        console.log('Socket произошла ошибка')
    }
}