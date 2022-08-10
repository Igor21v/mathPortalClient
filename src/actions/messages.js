import { store } from "../reducers"
import { setMessage } from "../reducers/messagesReducer"


export function getMessage(event, dispatch) {
    const message = JSON.parse(event.data)
    dispatch(setMessage(message))
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