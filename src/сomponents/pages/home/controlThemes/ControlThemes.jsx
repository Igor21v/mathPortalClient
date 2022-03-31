import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addTheme } from '../../../../actions/theme';
import { useDispatch } from "react-redux";
import AddStatus from './addStatus/AddStatus';

const ControlThemes = () => {
    const [nameTheme, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const dispatch = useDispatch()
    const AddTheme = (event) => {
        event.preventDefault()
        dispatch(addTheme(nameTheme, discription))
        console.log(nameTheme + '  ' + discription)
    }


    return (
        <>
            <Form className='border p-3 rounded-3' onSubmit={AddTheme}>
                <h2 style={{ textAlign: 'center' }}>Создание темы</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Наименование темы</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите наименование темы"
                        value={nameTheme} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Описание темы</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setDiscription(e.target.value)}
                        placeholder="Добвавьте описание темы (необязательно)"
                        value={discription} />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Добавить тему
                </Button>
                <AddStatus/>
            </Form>
        </>
    );
};

export default ControlThemes;