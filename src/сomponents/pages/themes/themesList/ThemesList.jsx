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
    const lockRequest = useSelector(state => state.app.lockRequest)
    const dispatch = useDispatch()
    const lastElement = useRef()
    const observer = useRef()


    useEffect(() => {
        console.log('сброс номера страницы')
        setCurrentPage(1)
    }, [showThemes, searchThemes])
    useEffect(() => {
        if (!lockRequest) {
            console.log('Запрос списка тем')
            dispatch(getListThemes(showThemes, searchThemes, currentPage))
        }
    }, [showThemes, searchThemes, currentPage, lockRequest])
    console.log('obnovlenie amountThemes ' + amountThemes + ' themes.length ' + themes.length + ' fetchingThemes ' + fetchingThemes)
    useEffect(() => {
        console.log('useEffect fetch' + ' fetchingThemes ' + fetchingThemes)
        if (fetchingThemes) return;
        if (observer.current) observer.current.disconnect();
        var options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: [0]
        }

        var callback = function (entries, observer) {
            console.log('callback ' + 'amountThemes ' + amountThemes + ' themes.length ' + themes.length + 'entries[0].isIntersecting' + entries[0].isIntersecting)
            if (entries[0].isIntersecting && (themes.length < amountThemes)) {
                setCurrentPage(prevState => prevState + 1)
                console.log('в зоне видимости')
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(lastElement.current);
    }, [fetchingThemes])


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