import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Container, Row } from 'react-bootstrap';
import Theme from './theme/Theme';




const ThemesList = () => {
   
    const themes = useSelector(state => state.themes.themes)
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
            <h1>Сервер сдох</h1>
        )
    }
}
export default ThemesList;