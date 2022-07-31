import React, { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { setAmountThemes, setFetchingThemes, setListThemes, setNeedUpdate } from '../../../reducers/themeReducer';
import { useState } from 'react';
import { useRef } from 'react';
import { useObserver } from '../../../hooks/useObserver';
import { useNonInitialEffect } from '../../../hooks/useNonInitialEffect';

const ThemesList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const amountThemes = useSelector(state => state.themes.amountThemes)
    const [amountThemesAfterRender, setAmountThemesAfterRender] = useState(0)
    const fetchingThemes = useSelector(state => state.themes.fetching)
    const dispatch = useDispatch()
    const lastElement = useRef()
    const [needUpdate, setNeedUpdate] = useState(undefined)
    const showThemesLoading = useSelector(state => state.themes.showThemesLoading)
    const userLoading = useSelector(state => state.themes.userLoading)

    if (amountThemesAfterRender != amountThemes) {
        setAmountThemesAfterRender(amountThemes)
    }

    useEffect(() => {
        return () => {
            console.log('демонтирование компонента ')
            dispatch(setListThemes([]))
            window.scrollTo(0, 0)
            setCurrentPage(1)
            dispatch(setAmountThemes(0))
        }
    }, [])

    useNonInitialEffect(() => {
        if (!showThemesLoading) {
            console.log('сброс номера страницы' + ' showThemesLoading ' + showThemesLoading)
            dispatch(setListThemes([]))
            dispatch(setAmountThemes(0))
            window.scrollTo(0, 0)
            setCurrentPage(1)
            setNeedUpdate(prevState => !prevState)
}
    }, [showThemes, searchThemes, showThemesLoading])

    useEffect(() => {
        console.log('showThemesLoading' + showThemesLoading + ' userLoading ' + userLoading)
        if (!showThemesLoading && !userLoading) {
            console.log('Запрос списка тем ' + 'currentPage' + currentPage + ' themes.length ' + themes.length + ' amountThemes ' + amountThemes +
                ' needUpdate ' + needUpdate + ' feetching ' + fetchingThemes)
            dispatch(getListThemes(showThemes, searchThemes, currentPage))
        }
    }, [currentPage, needUpdate, userLoading])

    useObserver(lastElement, fetchingThemes, (themes.length < amountThemesAfterRender), () => {
        setCurrentPage(prevState => prevState + 1)
    })

    console.log(' themes.length ' + themes.length + ' amountThemes ' + amountThemes)

    /* console.log('Themes: ' + themes.map(theme => theme.name))     */

    return (
        <>
            {themes ?
                <div className="d-flex flex-wrap justify-content-around position-relative" > {themes.map(theme =>
                    <Theme key={theme._id} theme={theme} />)}
                    <div ref={lastElement} className='position-absolute bottom-0' ></div>
                </div>
                :
                <h1>Сервер сдох</h1>}

        </>
    );
}
export default ThemesList;