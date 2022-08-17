import { getMessage } from "../actions/message";
import { setSocket } from "../reducers/messageReducer"
import { WS_API_URL } from "../utils/config";
import { store } from "../reducers";
import { refresh } from "../actions/auth";

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
    console.log('lll' + timerReopenSocket)
    socket.onclose = (event) => {
        console.log('Socket закрыт с кодом ' + event.code)
        if (user?.id && event.code !== 1008) {
            setTimeout(function reopenSocket() {
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
    socket.onmessage = async (event) => {
        const mess = JSON.parse(event.data)
        console.log('EM' + mess.event)
        switch (mess.event) {
            case 'newMessage':
                getMessage(mess)
                break;
            case 'reqRefresh':
                console.log('Запрошен рефреш токен по websocket, старый токен: ' + localStorage.getItem('token'))
                await store.dispatch(refresh())
                const message = {
                    event: 'reconnection',
                    userId: user?.id,
                    accessToken: localStorage.getItem('token'),
                }
                socket.send(JSON.stringify(message))
                console.log('новый токен: ' + localStorage.getItem('token'))

            default:
                break;
        }

    }
    socket.onerror = () => {
        console.log('Socket произошла ошибка')
    }
}