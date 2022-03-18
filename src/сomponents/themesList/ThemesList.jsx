import React from 'react';
import { useSelector } from "react-redux"
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import slide1 from "../../pictures/themes/1.jpg"
import slide2 from "../../pictures/themes/2.jpg"
import slide3 from "../../pictures/themes/3.jpg"
import slide4 from "../../pictures/themes/4.jpg"
import Theme from './theme/Theme';

const ThemesList = () => {
    /* const themes = useSelector(state => state.themes.themes) */
    const themes = [{ name: "Основные законы", discription: "Основные законы арифметики и алгебры", image: "image/1.jpg" },
    { name: "Теория множеств", image: "image/2.jpg" },
    { name: "Тема3", discription: "Краткое содержание темы3 ", image: "image/3.jpg" },
    { name: "Тема4", discription: "Краткое содержание темы4 ", image: "image/4.jpg" },
    { name: "Тема5", discription: "Краткое содержание темы5 ", image: "image/5.jpg" }]
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
};

export default ThemesList;