const SET_USER = "SET_USER"
const CLEAR_DATA_USER = "CLEAR_DATA_USER"
const SET_USER_LIST = "SET_USER_LIST"


const defaultState = {
    currentUser: {},
    userList: [],
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            console.log('registration action.payload' + JSON.stringify(action.payload))
            return {...state, currentUser: action.payload}
        case CLEAR_DATA_USER:
            localStorage.removeItem('token')
            return {...state, currentUser: {role: 'PUBLIC'}}
        case SET_USER_LIST: return {...state, userList: action.payload}
        default:
            return state
    }
}


export const setUser = user => ({type: SET_USER, payload: user})
export const clearDataUser = () => ({type: CLEAR_DATA_USER})
export const setUserList = userList => ({type: SET_USER_LIST, payload: userList})
