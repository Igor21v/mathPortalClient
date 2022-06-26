import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { addTheme } from '../../../../../actions/theme';
import { useDispatch, useSelector } from "react-redux";
import ProcState from '../../../../../utils/procState/ProcState';

const ControlThemes = () => {
    const theme = useSelector(state => state.themes.theme)
    const [nameTheme, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const dispatch = useDispatch()
    const AddTheme = (event) => {
        event.preventDefault()
        dispatch(addTheme(nameTheme, discription))
    }
    const procState = {
        state: ['Сохранение изменений...', 'Тема успешно добавлена, ', 'Ошибка при добавлении темы'],
        index: 0,
        ref: {
            ref: `/themes/edit/${theme._id}`,
            text: 'перейти к редактированию',
        }
    }
 
    return (
        <>
            <Form className='border p-3 rounded-3 bg-white shadow-sm' onSubmit={AddTheme}>
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
                        placeholder="Добавьте описание темы (необязательно)"
                        value={discription} />
                </Form.Group>
                <Button variant="primary" type="submit" className='me-3'>
                    Добавить тему
                </Button>
                <ProcState procState={procState}/>
            </Form>
        </>
    );
};

export default ControlThemes;