import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";
import themeReduser from "./themeReducer";
import messageReducer from "./messageReducer";


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
    upload: uploadReducer,
    app: appReducer,
    themes: themeReduser,
    messages: messageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
