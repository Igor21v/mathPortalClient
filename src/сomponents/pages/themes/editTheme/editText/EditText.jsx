import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { deleteTheme } from '../../../../../actions/theme';


const EditText = ({theme}) => {
    const [nameTheme, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const SaveChanges = (event) => {
        event.preventDefault()
        console.log('Редактирование темы')
    }
    const deleteTheme1 = (theme) => {
        deleteTheme(theme.id)
        console.log('del: ' + theme.id)
        console.log('d: ')
    }
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3' onSubmit={SaveChanges}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Наименование темы</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите наименование темы"
                        value={nameTheme} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="discription">
                    <Form.Label>Описание темы</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={(e) => setDiscription(e.target.value)}
                        placeholder="Добавьте описание темы (необязательно)"
                        value={discription} />
                </Form.Group>
                <Row >
                    <Col>
                        <Form.Group className="mb-3" controlId="number">
                            <Form.Label>Порядковй номер для очереди отображения</Form.Label>
                            <Form.Control
                                onChange={(e) => setDiscription(e.target.value)}
                                type="text"
                                placeholder="Добавьте номер для сортировки тем"
                                value={discription} />
                        </Form.Group>
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Опубликовать"
                        />
                    </Col>
                </Row>
                <div className='d-flex flex-row'>
                    <Button variant="primary" type="submit" className='me-3' onClick={SaveChanges}>
                        Сохранить изменения
                    </Button>
                    <Button variant="primary" type="submit" className='me-auto'>
                        Отменить изменения
                    </Button>
                    <a onClick={() => deleteTheme1(theme)}
                        className='text-decoration-underline text-danger mt-auto'
                        style={{ cursor: 'pointer' }}>

                        Удалить тему  </a>
                </div>
            </Form>
        </>
    );
};

export default EditText;