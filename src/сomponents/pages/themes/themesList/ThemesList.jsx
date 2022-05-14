import React,  { useEffect } from 'react';
import Theme from './theme/Theme';
import { getListThemes } from '../../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";





const ThemesList = () => {
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const themes = useSelector(state => state.themes.listThemes)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Запрос списка тем')
        dispatch(getListThemes(showThemes, searchThemes))
     }, [showThemes, searchThemes])

    if (themes ) {

    return (
        <>      
                {themes.map(theme =>
                    <Theme key={theme._id} theme={theme} />
                )}
        </>
    );
}
    else {
        return (
            <><h1>Сервер сдох</h1>
            </>
        )
    }
}
export default ThemesList;