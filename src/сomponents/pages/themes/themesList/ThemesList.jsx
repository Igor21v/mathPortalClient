import React, { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { setFetchingThemes, setListThemes } from '../../../../reducers/themeReducer';
import { useState } from 'react';

const ThemesList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const amountThemes = useSelector(state => state.themes.amountThemes)
    const fetchingThemes = useSelector(state => state.themes.fetching)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Запрос списка тем')
        setCurrentPage(1)
        dispatch(getListThemes(showThemes, searchThemes, 1))
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [showThemes, searchThemes])
    useEffect(() => {
        if (fetchingThemes) {
            dispatch(getListThemes(showThemes, searchThemes, currentPage))
            setCurrentPage(prevState => prevState + 1)
            console.log('Запрос списка тем из слушателя событий')
            document.addEventListener('scroll', scrollHandler)
            return () => {
                document.removeEventListener('scroll', scrollHandler)
            }
        }
    }, [fetchingThemes])
    useEffect(() => {

    }, [fetchingThemes])
    console.log('amountThemes ' + amountThemes + ' themes.length' + themes.length)
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 100 && themes.length < amountThemes) {
            dispatch(setFetchingThemes(true))
            console.log('set fetching ' + amountThemes + ' themes.length' + themes.length)
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