import React, { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { setFetchingThemes, setListThemes } from '../../../../reducers/themeReducer';
import { useState } from 'react';
import { useRef } from 'react';
import { useObserver } from '../../../../hooks/useObserver';
import { useNonInitialEffect } from '../../../../hooks/useNonInitialEffect';

const ThemesList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const amountThemes = useSelector(state => state.themes.amountThemes)
    const fetchingThemes = useSelector(state => state.themes.fetching)
    const lockRequest = useSelector(state => state.app.lockRequest)
    const dispatch = useDispatch()
    const lastElement = useRef()
   /*  const [needUpdate, setNeedUpdate] = useState(undefined)d */
    const needUpdate = useRef(false)

    useNonInitialEffect(() => {
        console.log('сброс номера страницы')
        dispatch(setListThemes([]))
        window.scrollTo(0, 0)
        setCurrentPage(1)
         /* setNeedUpdate(prevState => !prevState) */
         needUpdate.current = !needUpdate.current
    }, [showThemes, searchThemes])

    useEffect(() => {
        if (!lockRequest) {
            console.log('Запрос списка тем' + 'currentPage' + currentPage + ' themes.length ' + themes.length + ' amountThemes ' + amountThemes, ' lockRequest ' + lockRequest + ' needUpdate ' + needUpdate.current)
            dispatch(getListThemes(showThemes, searchThemes, currentPage))
        }
    }, [currentPage, lockRequest, needUpdate.current])

    useObserver(lastElement, fetchingThemes, (themes.length < amountThemes), () => {
        setCurrentPage(prevState => prevState + 1)
    })
       
    useEffect( () => {
        return () => {
            console.log('демонтирование компонента')
            dispatch(setListThemes([]))
        }}, [])
    console.log('Themes: ' + themes.map(theme => theme.name))

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