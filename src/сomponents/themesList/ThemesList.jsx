import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Container, Row } from 'react-bootstrap';
import Theme from './theme/Theme';




const ThemesList = () => {
     const themes2 = [{ name: "Основные законы", discription: "Основные законы арифметики и алгебры", image: "image/1.jpg" },
    { name: "Теория множеств", image: "image/2.jpg" },
    { name: "Тема3", discription: "Краткое содержание темы3 ", image: "image/3.jpg" },
    { name: "Тема4", discription: "Краткое содержание темы4 ", image: "image/4.jpg" },
    { name: "Тема5", discription: "Краткое содержание темы5 ", image: "image/5.jpg" }]

    
    
    
    const themes = useSelector(state => state.themes.themes)
    if (themes ) {
    return (
        <div>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row className="justify-content-md-center">
                    {themes.map(theme =>
                        <Theme theme={theme} />
                    )}
                </Row>
            </Container>
        </div>
    );
}
    else {
        return (
            <h1>Сервер сдох</h1>
        )
    }
}
export default ThemesList;