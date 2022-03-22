import React, { useEffect } from 'react';
import ThemesList from '../../themesList/ThemesList';
import { getThemes } from '../../../actions/theme';
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Container, Col, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';



export const Themes = () => {
    const showThemes = "1"
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getThemes(showThemes))
    })
    return (
        <div>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row className="gap-3">
                    <Col md={2}>
                        <LeftMenu />
                    </Col>

                    <Col>        
                        <Row className="d-flex justify-content-center bg-warning" >
                            < ThemesList className="d-flex justify-content-center bg-warning"/>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}