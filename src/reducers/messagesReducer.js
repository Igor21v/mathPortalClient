const SET_SOCKET = 'SET_SOCKET'
const ADD_MESSAGE = 'ADD_MESSAGE'

const defaultState = {
    socket: null,
    messages: [],
}

export default function messagesReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_SOCKET: return {...state, socket: action.payload}
        case ADD_MESSAGE: return {...state, messages: [action.payload, ...state.messages]}
        default:
            return state
    }
}

export const setSocket = (payload) => ({type: SET_SOCKET, payload})
export const setMessage = (payload) => ({type: ADD_MESSAGE, payload})