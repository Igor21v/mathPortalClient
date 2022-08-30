import { store } from "../reducers"
import { addMessage, setMessage, setTotalMessages } from "../reducers/messageReducer"
import { $authHost, $host } from ".";


export function getMessage(message) {
    const currentChat = store.getState().messages.currentChat
    console.log('CH2 ' + message.chatId + '  ' + JSON.stringify(currentChat))
    if (message.chatId == currentChat) {
        store.dispatch(addMessage(message))
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

export async function getMessagesList(chatId, page, limit) {
    try {
        const response = await $authHost.get(`api/message/getMessagesList?chatId=${chatId}&page=${page}&limit=${limit}`)
        store.dispatch(setMessage(response.data))
        /* store.dispatch(setTotalMessages(response.data.page)) */
    } catch (error) {
        console.log(error?.response?.data?.message)
    }
}

export async function deleteMessages(messagesId, chatId) {
    try {
        const messagesIdJSON = JSON.stringify(messagesId)
        const response = await $authHost.delete(`api/message/deleteMessages?messagesId=${messagesIdJSON}&chatId=${chatId}`)
        store.dispatch(setMessage(response.data))
    } catch (error) {
        console.log('Ошибка удаления сообщений ' + error?.response?.data?.message)
    }
}