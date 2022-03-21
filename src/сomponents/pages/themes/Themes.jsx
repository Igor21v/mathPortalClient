import React, {useEffect} from 'react';
import ThemesList from '../../themesList/ThemesList';
import { getThemes } from '../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";


export const Themes = () => {
    const showThemes = "1"
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(getThemes(showThemes))
    })
       return     (<ThemesList/>);
}