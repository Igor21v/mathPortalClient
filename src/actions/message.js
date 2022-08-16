import { store } from "../reducers"
import { addMessage, setMessage } from "../reducers/messageReducer"
import { $authHost, $host } from ".";


export function getMessage(event, dispatch) {
    const message = JSON.parse(event.data)
    const currentChat = store.getState().messages.currentChat
    console.log('CH2 ' + message.chatId + '  ' + JSON.stringify(currentChat))
    if (message.chatId == currentChat) {
        dispatch(addMessage(message))
    }
}

export async function sendMessage(value, chatId) {
    const socket = store.getState().messages.socket
    const user = store.getState().user.currentUser
    const message = {
        authorId: user.id,
        message: value,
        chatId,
        event: 'newMessage'
    }
    socket.send(JSON.stringify(message));
}

export async function getMessagesList(chatId) {
    try {
        const response = await $authHost.get(`api/message/getMessagesList?chatId=${chatId}`)
        store.dispatch(setMessage(response.data))
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
}