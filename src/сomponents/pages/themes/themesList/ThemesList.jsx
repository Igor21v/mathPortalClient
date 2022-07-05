import React, { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";





const ThemesList = () => {
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const amountThemes = useSelector(state => state.themes.amountThemes)
    console.log('amThemes ' + amountThemes)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Запрос списка тем')
        dispatch(getListThemes(showThemes, searchThemes, 0))
    }, [showThemes, searchThemes])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (e) => {
       
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 100){
            console.log('scroll Height ' + e.target.documentElement.scrollHeight)
            console.log('scroll Top ' + e.target.documentElement.scrollTop)
            console.log('Inner Height  ' + window.innerHeight)
        }
    }

    return (
        <>
            {themes ?
                <>{themes.map(theme =>
                    <Theme key={theme._id} theme={theme} />)}</>
                :
                <h1>Сервер сдох</h1>}
        </>
    );
}
export default ThemesList;