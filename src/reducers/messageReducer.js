const SET_SOCKET = 'SET_SOCKET'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_CURRET_CHAT = 'SET_CURRET_CHAT'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_SELECTED_MESSAGE = 'SET_SELECTED_MESSAGE'

const defaultState = {
    socket: null,
    messages: [],
    currentChat: undefined,
    selectedMessage: [],
}

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SOCKET: return {...state, socket: action.payload}
        case ADD_MESSAGE: return {...state, messages: [action.payload, ...state.messages]}
        case SET_MESSAGE: return {...state, messages: action.payload}
        case SET_CURRET_CHAT: return {...state, currentChat: action.payload}
        case SET_SELECTED_MESSAGE: return {...state, selectedMessage: [...action.payload]}
        default: return state
    }
}

export const setSocket = (payload) => ({type: SET_SOCKET, payload})
export const addMessage = (payload) => ({type: ADD_MESSAGE, payload})
export const setMessage = (payload) => ({type: SET_MESSAGE, payload})
export const setCurrentChat = (payload) => ({type: SET_CURRET_CHAT, payload})
export const setSelectedMessage = (payload) => ({type: SET_SELECTED_MESSAGE, payload})
