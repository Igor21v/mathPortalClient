import React from 'react';
import Login from "../../../authorization/Login";
import { Col, Container } from 'react-bootstrap';

const Guest = () => {
    return (
        <Container className="d-flex justify-content-center mb-5 ">
            <Col lg={4} >
                <h3 className="authorization_need">Необходима авторизация</h3>
                <Login />
            </Col>
        </Container>
    );
};

export default Guest;