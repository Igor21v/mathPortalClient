const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const SET_PROCESS_STATUS = "SET_PROCESS_STATUS"
const RESET_PROCESS_STATUS = 'RESET_PROCESS_STATUS'
const LOCK_REQUEST = 'LOCK_REQUEST'
const UNLOCK_REQUEST = 'UNLOCK_REQUEST'


const defaultState = {
    loader: false,
    contentPage: 'themes',
    processStatus: {},
    lockRequest: false,
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADER: return { ...state, loader: true }
        case HIDE_LOADER: return { ...state, loader: false }
        case RESET_PROCESS_STATUS: return {...state, processStatus: {}}
        case SET_PROCESS_STATUS: 
            return {
                 ...state, 
                 processStatus: {...state.processStatus, [action.payload.index] : {state: action.payload.state, mess: action.payload.mess} }}
        case LOCK_REQUEST: return {...state, lockRequest: true}
        case UNLOCK_REQUEST: return {...state, lockRequest: false}

        default:
            return state
    }
}

export const showLoader = () => ({ type: SHOW_LOADER })
export const hideLoader = () => ({ type: HIDE_LOADER })
export const setProcessStatus = (payload) => ({ type: SET_PROCESS_STATUS, payload: payload })
export const resetProcessStatus = () => ({type: RESET_PROCESS_STATUS})
export const lockRequest = () => ({ type: LOCK_REQUEST })
export const unlockRequest = () => ({ type: UNLOCK_REQUEST })

