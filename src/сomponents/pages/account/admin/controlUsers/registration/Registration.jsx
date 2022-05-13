import React, { useState } from 'react';
import { registration } from "../../../../../../actions/user";
import { Form, InputGroup, Button, Container, Card } from 'react-bootstrap';

const Registration = () => {
    const [form, setForm] = useState({
        phon: '',
        password: '',
        name: '',
        surname: ''
    }
    )
    const update = e => 
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
        
    const getRegistration = event => {
        event.preventDefault()
        registration(form.phon, form.password, form.name, form.surname)
    }


    return (
        <Card className='mb-4 p-3 shadow-sm'>
            <h3 style={{textAlign: 'center'}}>Регистрация нового ученика</h3>
            <Form onSubmit={getRegistration}>
                <Form.Group controlId="fromBasicPhon" className="mb-2">
                    <Form.Label>Номер телефона</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>+7</InputGroup.Text>
                        <Form.Control type="text" name='phon' placeholder='Введите номер телефона' value={form.phon} onChange={update} />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="fromBasicPassword" className="mb-2">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" name='password' placeholder='Введите пароль' value={form.password} onChange={update} />
                </Form.Group>
                <Form.Group controlId="fromBasicName" className="mb-2">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Введите имя ученика' value={form.name} onChange={update}/>
                </Form.Group>
                <Form.Group controlId="fromBasicSurname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type='text' name='surname' placeholder='Введите фамилию ученика' value={form.surname} onChange={update}/>
                </Form.Group>
                <Form.Group className="mt-3">
                    <Button type="submit" className="btn-primary" >Зарегистрировать</Button>
                </Form.Group>
            </Form>
        </Card>
    );
};

export default Registration;