const SET_SOCKET = 'SET_SOCKET'
const ADD_MESSAGE = 'ADD_MESSAGE'
const SET_CURRET_CHAT = 'SET_CURRET_CHAT'
const SET_MESSAGE = 'SET_MESSAGE'
const SET_SELECTED_MESSAGE = 'SET_SELECTED_MESSAGE'
const CHANGE_ONE_MESSAGE = 'CHANGE_ONE_MESSAGE'
const CHANGE_ALL_MESSAGES = 'CHANGE_ALL_MESSAGES'
const SET_TOTAL_MESSAGES = 'SET_TOTAL_MESSAGES'

const defaultState = {
    socket: null,
    messages: [],
    currentChat: undefined,
    selectedMessage: [],
    totalMessages: 0,
}

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SOCKET: return { ...state, socket: action.payload }
        case ADD_MESSAGE: return { ...state, messages: [action.payload, ...state.messages] }
        case SET_MESSAGE: return { ...state, messages: action.payload }
        case SET_TOTAL_MESSAGES: return { ...state, totalMessages: action.payload }
        case SET_CURRET_CHAT: return { ...state, currentChat: action.payload }
        case SET_SELECTED_MESSAGE: return { ...state, selectedMessage: [...action.payload] }
        case CHANGE_ONE_MESSAGE:
            let messages = state.messages
            messages[action.payload.index] = action.payload.mess
            return { ...state, messages: [...messages] }
        default: return state
    }
}

export const setSocket = (payload) => ({ type: SET_SOCKET, payload })
export const addMessage = (payload) => ({ type: ADD_MESSAGE, payload })
export const setMessage = (payload) => ({ type: SET_MESSAGE, payload })
export const setCurrentChat = (payload) => ({ type: SET_CURRET_CHAT, payload })
export const setSelectedMessage = (payload) => ({ type: SET_SELECTED_MESSAGE, payload })
export const changeOneMessage = (payload) => ({ type: CHANGE_ONE_MESSAGE, payload })
export const changeAllMessages = (payload) => ({ type: CHANGE_ALL_MESSAGES, payload })
export const setTotalMessages = (payload) => ({ type: SET_TOTAL_MESSAGES, payload })
