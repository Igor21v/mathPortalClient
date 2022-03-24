import React, { useEffect } from 'react';
import ThemesList from '../../themesList/ThemesList';
import { getThemes } from '../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Container, Col, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';



export const Themes = () => {
    const showThemes = useSelector(state => state.themes.showThemes)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getThemes(showThemes, searchThemes))
    }, [searchThemes])
    console.log("ShT: " + showThemes + "  SeT: "+  searchThemes)
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