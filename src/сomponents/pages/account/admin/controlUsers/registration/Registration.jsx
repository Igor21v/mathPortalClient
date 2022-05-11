import React, { useState } from 'react';
import { registration } from "../../../../../../actions/user";
import { Form, InputGroup, Button, Container, Card } from 'react-bootstrap';

const Registration = () => {
    const [phon, setPhon] = useState("")
    const [password, setPassword] = useState("")
    const getRegistration = event => {
        event.preventDefault()
        registration(phon, password)
    }

    return (
        <Card className='mt-4 p-3'>
            <h3 style={{textAlign: 'center'}}>Регистрация нового ученика</h3>
            <Form onSubmit={getRegistration}>
                <Form.Group controlId="fromBasicPhon" className="mb-2">
                    <Form.Label>Номер телефона</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>+7</InputGroup.Text>
                        <Form.Control type="text" placeholder='Введите номер телефона' value={phon} onChange={(event) => setPhon(event.target.value)} />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder='Введите пароль' value={password} onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Button type="submit" className="btn-primary" >Зарегистрировать</Button>
                </Form.Group>
            </Form>
        </Card>
    );
};

export default Registration;