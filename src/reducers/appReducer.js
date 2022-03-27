const SHOW_LOADER = 'SHOW_LOADER'
const HIDE_LOADER = 'HIDE_LOADER'
const CONTENT_PAGE = 'CONTENT_PAGE'

const defaultState = {
    loader: false,
    contentPage: 'themes'
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_LOADER: return {...state, loader: true}
        case HIDE_LOADER: return {...state, loader: false}
        case CONTENT_PAGE: return {...state, contentPage: action.payload}
        default:
            return state
    }
}


export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})
export const contentPage = (payload) => ({type: CONTENT_PAGE, payload: payload})
