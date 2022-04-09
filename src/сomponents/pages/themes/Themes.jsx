import React, { useEffect } from 'react';
import ThemesList from './themesList/ThemesList';
import { getThemes } from '../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { Container, Col, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';



export const Themes = () => {
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getThemes(showThemes, searchThemes))
        localStorage.setItem('useEffectCont', Number(localStorage.getItem('useEffectCont')) + 1);
    }, [showThemes, searchThemes])

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