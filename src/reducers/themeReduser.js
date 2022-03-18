const SET_THEMES = "SET_THEMES"

const defaultState = {
    themes: []
}

export default function themeReduser(state = defaultState, action) {
     switch (action.type) {
         case SET_THEMES return {...state, themes: action.payliad}
         default:
             return state
     }
}

export const setThemes = (themes) => ({type: SET_THEMES, payload: themes})