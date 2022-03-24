const SET_THEMES = "SET_THEMES"
const SET_SHOW_THEMES = "SET_SHOW_THEMES"
const SET_SEARCH_THEMES = "SET_SEARCH_THEMES"

const defaultState = {
    themes: [],
    showThemes: "all",
    searchThemes: ""
}

export default function themeReduser(state = defaultState, action) {
     switch (action.type) {
         case SET_THEMES: return {...state, themes: action.payload}
         case SET_SHOW_THEMES: return {...state, showThemes: action.payload}
         case SET_SEARCH_THEMES: return {...state, searchThemes: action.payload}
         default:
             return state
     }
}

export const setThemes = (payload) => ({type: SET_THEMES, payload: payload})
export const setShowThemes = (payload) => ({type: SET_SHOW_THEMES, payload: payload})
export const setSearchThemes = (payload) => ({type: SET_SEARCH_THEMES, payload: payload})