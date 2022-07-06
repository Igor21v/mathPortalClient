import React, { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { setFetchingThemes, setListThemes } from '../../../../reducers/themeReducer';
import { useState } from 'react';
import { useRef } from 'react';

const ThemesList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const amountThemes = useSelector(state => state.themes.amountThemes)
    const fetchingThemes = useSelector(state => state.themes.fetching)
    const dispatch = useDispatch()
    const lastElement = useRef() 
    console.log('gggbbb ' + lastElement)

    useEffect(() => {
        console.log('Запрос списка тем')
        setCurrentPage(1)
        dispatch(getListThemes(showThemes, searchThemes, 1))

    }, [showThemes, searchThemes])
    useEffect(() => {
        if (fetchingThemes) {
            dispatch(getListThemes(showThemes, searchThemes, currentPage))
            setCurrentPage(prevState => prevState + 1)
            console.log('Запрос списка тем из слушателя событий')
        }
    }, [fetchingThemes])

    useEffect(() => {

    }, [])
    console.log('amountThemes ' + amountThemes + ' themes.length' + themes.length)


    return (
        <>
            {themes ?
                <>{themes.map(theme =>
                    <Theme key={theme._id} theme={theme} />)}
                    <div ref={lastElement} style={{height: '200px', background: 'red', width: '200px', border: '4mm ridge green', borderRadius: '50px'}}></div>
                    </>
                :
                <h1>Сервер сдох</h1>}
                
        </>
    );
}
export default ThemesList;