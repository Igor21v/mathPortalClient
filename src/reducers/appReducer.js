const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const SET_PROCESS_STATUS = "SET_PROCESS_STATUS"
const RESET_PROCESS_STATUS = 'RESET_PROCESS_STATUS'

const defaultState = {
    loader: false,
    contentPage: 'themes',
    processStatus: {},
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADER: return { ...state, loader: true }
        case HIDE_LOADER: return { ...state, loader: false }
        case RESET_PROCESS_STATUS: return {...state, processStatus: {}}
        case SET_PROCESS_STATUS: 
            console.log('изм')
            return {
                 ...state, 
                 processStatus: {...state.processStatus, [action.payload.index] : {state: action.payload.state, mess: action.payload.mess} }}
        default:
            return state
    }
}

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const setProcessStatus = (payload) => ({ type: SET_PROCESS_STATUS, payload: payload })
export const resetProcessStatus = () => ({type: RESET_PROCESS_STATUS})

