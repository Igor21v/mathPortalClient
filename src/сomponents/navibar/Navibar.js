import React, { useState } from 'react';
import {Nav, Navbar, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/userReducer";
import Login from "../authorization/Login";


const Stales = styled.div`
a {
    color: black;
    &:hover {
        color: white
    }
}
`
const StalesAll = styled.div`
    color: black;
    text-decoration: underline;
    &:hover {
        color: white
`


export default function Navibar() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userRole = useSelector(state => state.user.currentUser.role);
    const dispatch = useDispatch();
    const getLogout = () => dispatch(logout());
    if (userRole && show) {
        handleClose();
    }
    return (
        <>
            <Stales>
                <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className='shadow'>
                    <Container>
                        <Link to="/">
                            <Navbar.Brand>
                                <img
                                    src="/logo.svg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="Ошибка импорта логотипа"
                                />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className='me-auto'>
                                 <Link className='me-2' to="/">Темы</Link> 
                                 <Link className='me-2' to="/account/controlUser">Личный кабинет</Link> 
                                 <Link className='me-2' to="/about">О портале</Link> 
                            </Nav>
                            {!userRole &&
                                <Nav onSelect={handleShow}> <Nav.Link eventKey="0">
                                    <StalesAll>Войти</StalesAll>
                                </Nav.Link> </Nav>}
                            {userRole &&
                                <Nav onSelect={getLogout}> <Nav.Link eventKey="0">
                                    <StalesAll>Выйти</StalesAll>
                                </Nav.Link> </Nav>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Stales>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Вход в учетную запись</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login />
                </Modal.Body>

            </Modal>

        </>
    );
}