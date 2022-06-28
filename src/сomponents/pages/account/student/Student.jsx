import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LeftMenu from './leftMenu/LeftMenu';

const Student = () => {
    const currentUser = useSelector(state=> state.user.currentUser)
    console.log(currentUser)
    return (
        <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Row className='gap-3'>
                <Col lg={2} className='p-0 m-0'>
                    <LeftMenu/>
                </Col>
                <Col className='p-0'>
                    <h3 className='text-center m-2'> Личный кабинет: {currentUser.name} {currentUser.surname}</h3>
                    <Card>
                        <h4 className='text-center m-2'>
                            Файлы
                        </h4>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Student;