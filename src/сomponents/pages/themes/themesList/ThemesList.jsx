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
    const observer = useRef()

    useEffect(() => {
        console.log('сброс номера страницы')
        setCurrentPage(1)
    }, [])
    useEffect(() => {
        console.log('Запрос списка тем')
        dispatch(getListThemes(showThemes, searchThemes, currentPage))

    }, [showThemes, searchThemes, currentPage])
    useEffect(() => {
        if (fetchingThemes) return;
        if (observer.current) observer.current.disconnect();
        var options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: [ 0 ]
        }
        var callback = function(entries, observer) {
            console.log('callback ' + entries[0].isIntersecting)
            console.log('amountThemes ' + amountThemes + ' themes.length ' + themes.length)
            if (entries[0].isIntersecting && (themes.length<amountThemes)) {
                setCurrentPage(prevState => prevState + 1)
                console.log('в зоне видимости')
            }
        };
        observer.current = new IntersectionObserver(callback, options);
        observer.current.observe(lastElement.current);
    }, [fetchingThemes, amountThemes])
    console.log('obnovlenie')
    console.log('fetchingThemes ' + fetchingThemes)
    console.log('amountThemes777 ' + amountThemes + ' themes.length777' + themes.length)


 

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