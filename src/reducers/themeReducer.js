const SET_LIST_THEMES = "SET_LIST_THEMES"
const ADD_LIST_THEMES = 'ADD_LIST_THEMES'
const SET_THEME = "SET_THEME"
const SET_SHOW_THEMES = "SET_SHOW_THEMES"
const SET_SEARCH_THEMES = "SET_SEARCH_THEMES"
const SET_AMOUNT_THEMES = "SET_AMOUNT_THEMES"
const SET_FETCHING_THEMES = 'SET_FETCHING_THEMES'
const SET_SHOW_THEMES_LOADING = 'SET_SHOW_THEMES_LOADING'
const SET_USER_LOADING = 'SET_USER_LOADING'
/* const SET_NEED_UPDATE = 'SET_NEED_UPDATE' */


const defaultState = {
    listThemes: [],
    theme: "",
    showThemes: "onlyPublic",
    searchThemes: "",
    addStatus: "",
    amountThemes: 0,
    showThemesLoading: true,
    userLoading: true,
    /* needUpdate: false, */
}

export default function themeReduser(state = defaultState, action) {
     switch (action.type) {
         case SET_LIST_THEMES: return {...state, listThemes: action.payload}
         case ADD_LIST_THEMES: return {...state, listThemes: [...state.listThemes, ...action.payload]}
         case SET_FETCHING_THEMES: return {...state, fetching: action.payload}
         case SET_THEME: return {...state, theme: action.payload}
         case SET_SHOW_THEMES: return {...state, showThemes: action.payload}
         case SET_SEARCH_THEMES: return {...state, searchThemes: action.payload}
         case SET_AMOUNT_THEMES: return {...state, amountThemes: action.payload}
         case SET_SHOW_THEMES_LOADING: return {...state, showThemesLoading: action.payload}
         case SET_USER_LOADING: return {...state, userLoading: action.payload}
         /* case SET_NEED_UPDATE: return {...state, needUpdate: action.payload} */

         default:
             return state
     }
}

export const setListThemes = (payload) => ({type: SET_LIST_THEMES, payload: payload})
export const addListThemes = (payload) => ({type: ADD_LIST_THEMES, payload: payload})
export const setTheme = (payload) => ({type: SET_THEME, payload: payload})
export const setShowThemes = (payload) => ({type: SET_SHOW_THEMES, payload: payload})
export const setSearchThemes = (payload) => ({type: SET_SEARCH_THEMES, payload: payload})
export const setAmountThemes = (payload) => ({type: SET_AMOUNT_THEMES, payload: payload})
export const setFetchingThemes = (payload) => ({type: SET_FETCHING_THEMES, payload: payload})
export const setShowThemesLoading = (payload) => ({type: SET_SHOW_THEMES_LOADING, payload: payload})
export const setUserLoading = (payload) => ({type: SET_USER_LOADING, payload: payload})
/* export const setNeedUpdate = (payload) => ({type: SET_NEED_UPDATE, payload: payload}) */

