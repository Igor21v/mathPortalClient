import React from 'react';
import ThemesList from './themesList/ThemesList';
import { Container, Col, Row } from 'react-bootstrap';
import TopMenu from './topMenu/TopMenu';
import './themes.css'



export const Themes = () => {

    return (
        <>
            <Container style={{ paddingTop: '5px', paddingBottom: '20px' }}>
                <Row className='themes mb-3'>
                    <TopMenu />
                </Row>
                <Row >
                    < ThemesList />
                </Row>
            </Container >
        </ >
    )
}