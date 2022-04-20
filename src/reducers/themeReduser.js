const SET_LIST_THEMES = "SET_LIST_THEMES"
const SET_THEME = "SET_THEME"
const SET_SHOW_THEMES = "SET_SHOW_THEMES"
const SET_SEARCH_THEMES = "SET_SEARCH_THEMES"
const SET_PROCESS_STATUS = "SET_PROCESS_STATUS"

const defaultState = {
    listThemes: [],
    theme: "",
    showThemes: "all",
    searchThemes: "",
    addStatus: ""
}

export default function themeReduser(state = defaultState, action) {
     switch (action.type) {
         case SET_LIST_THEMES: return {...state, listThemes: action.payload}
         case SET_THEME: return {...state, theme: action.payload}
         case SET_SHOW_THEMES: return {...state, showThemes: action.payload}
         case SET_SEARCH_THEMES: return {...state, searchThemes: action.payload}
         case SET_PROCESS_STATUS: return {... state, processStatus: action.payload}
         default:
             return state
     }
}

export const setListThemes = (payload) => ({type: SET_LIST_THEMES, payload: payload})
export const setTheme = (payload) => ({type: SET_THEME, payload: payload})
export const setShowThemes = (payload) => ({type: SET_SHOW_THEMES, payload: payload})
export const setSearchThemes = (payload) => ({type: SET_SEARCH_THEMES, payload: payload})
export const setProcessStatus = (payload) => ({type: SET_PROCESS_STATUS, payload: payload})