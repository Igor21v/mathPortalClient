import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Button, Container, Row } from 'react-bootstrap';
import Theme from './theme/Theme';
import { useNavigate } from 'react-router-dom';




const ThemesList = () => {
    const router = useNavigate()
    console.log(router)
    const themes = useSelector(state => state.themes.themes)
    if (themes ) {
    return (
        <>      
                <Button onClick={() => router('/themes/edit/444')}>Перейти</Button>
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