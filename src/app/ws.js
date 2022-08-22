import { getMessage } from "../actions/message";
import { setSocket } from "../reducers/messageReducer"
import { WS_API_URL } from "../utils/config";
import { store } from "../reducers";
import { refresh } from "../actions/auth";

export default function (user, socket) {
    let reopeningSocket = false
    console.log('socket.readyState ' + socket?.readyState)
    if (socket?.readyState === 1) {
        socket.close()
        console.log('Сокет принудительно закрывается ')
    } else if (user?.id) {
        socket = new WebSocket(`${WS_API_URL}connectionWS`)
    }
    addEventListener(user, socket, reopeningSocket)
    store.dispatch(setSocket(socket))
}

function addEventListener(user, socket, reopeningSocket) {
    socket.onclose = (event) => {
        console.log('Socket закрыт с кодом ' + event.code + 'Время: ' + Date.now() + ' ' + reopeningSocket)
        if (user?.id && event.code !== 1008) {
            setTimeout(function () {
                socket = new WebSocket(`${WS_API_URL}connectionWS`)
                reopeningSocket = true
                addEventListener(user, socket, reopeningSocket)
                store.dispatch(setSocket(socket))
                console.log('Socket переоткрыт ' + reopeningSocket)
            }, reopeningSocket ? 27000 : 5000)
        }
    }
    socket.onopen = () => {
        console.log('Socket открыт ' + Date.now() + '  ' + reopeningSocket)
        reopeningSocket = false
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