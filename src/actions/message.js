import { store } from "../reducers"
import { setMessage } from "../reducers/messageReducer"


export function getMessage(event, dispatch) {
    const message = JSON.parse(event.data)
    const currentChat = store.getState().messages.currentChat
    console.log('CH2 ' + message.chatId + '  ' + JSON.stringify(currentChat))
    if (message.chatId == currentChat) {
        dispatch(setMessage(message))
    }
}

export async function sendMessage(value, chatId) {
    const socket = store.getState().messages.socket
    const user = store.getState().user.currentUser
    console.log('fffffxcccc ' + JSON.stringify(user))
    const message = {
        username: user.name,
        message: value,
        chatId,
        id: Date.now(),
        event: 'message'
    }
    socket.send(JSON.stringify(message));
}