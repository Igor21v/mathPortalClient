import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserPage from '../userPage/UserPage';

const Student = () => {
    const currentUser = useSelector(state=> state.user.currentUser)
    console.log(currentUser)
    return (
        <Container style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                    <h3 className='text-center mb-3'> Личный кабинет: {currentUser.name} {currentUser.surname}</h3>
                    <UserPage/>

        </Container>
    );
};

export default Student;