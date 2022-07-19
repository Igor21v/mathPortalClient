import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { deleteTheme, editTheme, getTheme } from '../../../../../actions/theme';
import ProcState from '../../../../../utils/procState/ProcState';


const EditText = ({ theme }) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        _id: theme._id,
        name: theme.name,
        discription: theme.discription,
        order: theme.order,
        isPublic: theme.isPublic
    });
    const saveChanges = (event) => {
        event.preventDefault()
        console.log('Редактирование темы' + theme._id)
        editTheme(form)
    }
    const cancelChanges = () => {
        setForm({
            _id: theme._id,
            name: theme.name,
            discription: theme.discription,
            order: theme.order,
            isPublic: theme.isPublic
        })
    }
    const update = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const procState = {
        state: ['Сохранение изменений...', 'Тема успешно отредактирована', 'Ошибка при редактировании темы'],
        index: 0
    }
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3 bg-white' onSubmit={saveChanges}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Наименование темы</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        onChange={update}
                        placeholder="Введите наименование темы"
                        value={form.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="discription">
                    <Form.Label>Описание темы</Form.Label>
                    <Form.Control
                        type="text"
                        name='discription'
                        onChange={update}
                        placeholder="Добавьте описание темы (необязательно)"
                        value={form.discription} />
                </Form.Group>
                <Row >
                    <Col>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Порядковй номер для очереди отображения</Form.Label>
                            <Form.Control
                                name='order'
                                onChange={update}
                                type="text"
                                placeholder="Добавьте номер для сортировки тем"
                                value={form.order} />
                        </Form.Group>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Опубликовать"
                            name='isPablic'
                            onChange={() => setForm({ ...form, isPublic: !form.isPublic })}
                            checked={form.isPublic} />
                    </Col>
                </Row>
                <div className='d-flex flex-row'>
                    <Button variant="primary" type="submit" className='me-3' >
                        Сохранить изменения
                    </Button>
                    <Button variant="primary" className='me-auto' onClick={cancelChanges}> 
                        Отменить изменения
                    </Button>
                    <p onClick={() => deleteTheme(theme._id)}
                        className='text-decoration-underline text-danger mt-auto ms-3'
                        style={{ cursor: 'pointer' }}>

                        Удалить тему  </p>
                </div>
                <ProcState procState={procState} />
            </Form>
        </>
    );
};

export default EditText;