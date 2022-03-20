const SET_THEMES = "SET_THEMES"

const defaultState = {
    themes: []
}

export default function themeReduser(state = defaultState, action) {
     switch (action.type) {
         case SET_THEMES: return {...state, themes: action.payload}
         default:
             return state
     }
}

export const setThemes = (payload) => ({type: SET_THEMES, payload: payload})