import React from 'react';
import Login from "../../../components/authorization/Login";
import { Card, Col, Container } from 'react-bootstrap';

const Guest = () => {
    return (
        <Container className="d-flex justify-content-center mb-5 ">
            <Col lg={4} >
                <Card className='p-4 mt-4'>
                    <h3 style={{textAlign: 'center'}}>Необходима авторизация</h3>
                    <Login />
                </Card>
            </Col>
        </Container>
    );
};

export default Guest;