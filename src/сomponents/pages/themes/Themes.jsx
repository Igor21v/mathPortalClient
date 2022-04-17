import React from 'react';
import ThemesList from './themesList/ThemesList';
import { Container, Col, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';



export const Themes = () => {

    return (
        <>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row className="gap-3">
                    <Col lg={2}>
                        <LeftMenu />
                    </Col>
                    <Col>
                        <div className="d-flex flex-wrap justify-content-around" >
                            < ThemesList />
                        </div>
                    </Col>
                </Row>
            </Container >
        </ >
    )
}