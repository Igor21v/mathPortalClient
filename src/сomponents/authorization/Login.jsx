import React, { useState } from 'react';
import './authorization.css'
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";
import { Button } from 'react-bootstrap';
import { Form, InputGroup, Container, Row, Stack } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const getLogin = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
    }


    return (
        <>
            <Form onSubmit={getLogin}>
                <Form.Group controlId="fromBasicEmail" className="mb-2">
                    <Form.Label>Номер телефона</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>+7</InputGroup.Text>
                        <Form.Control type="text" placeholder='Введите email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder='Введите пароль' value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Stack direction="horizontal" className="mt-3">
                    <Form.Group controlId="fromBasicCheckbox">
                        <Form.Check type="checkbox" label='запомнить меня' />
                    </Form.Group>
                    <Form.Group className="ms-auto ">
                        <Button type="submit" className="btn-primary" >Войти</Button>
                    </Form.Group>
                </Stack>
            </Form>

        </>
    );
};

export default Login;
