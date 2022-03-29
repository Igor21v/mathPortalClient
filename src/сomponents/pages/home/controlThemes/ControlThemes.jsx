import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addTheme } from '../../../../actions/theme';

const ControlThemes = () => {
    const [nameTheme, setName] = useState;
    const [discription, setDiscription] = useState;
    const AddTheme = (event) => {
        event.preventDefault()
        addTheme(nameTheme, discription)
    }

    return (
        <>
        <Form className='border p-3 rounded-3' onSubmit={AddTheme}>
        <h2 style = {{textAlign: 'center'}}>Создание темы</h2>
            <Form.Group className="mb-3">
                <Form.Label>Наименование темы</Form.Label>
                <Form.Control type="text" onSubmit={(e) => setName(e.target.value)} placeholder="Введите наименование темы" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Описание темы</Form.Label>
                <Form.Control type="text" onSubmit={(e) => setDiscription(e.target.value)} placeholder="Добвавьте описание темы (необязательно)" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Добавить тему
            </Button>
        </Form>
        </>
    );
};

export default ControlThemes;