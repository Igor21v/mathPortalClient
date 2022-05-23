import React, { useEffect, useState } from 'react';
import { Card, Form, FormGroup, Stack, InputGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProcState from '../../../../../procState/ProcState';

const UserEdit = () => {
    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id == param.id)
    const [form, setForm] = useState({
        name: user.name,
        surname: user.surname,
        phon: user.phon,
        password: ''
    })
    const update = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const procState = {
        state: [
            'Выполняется сохраненеие пользователя...',
            'Пользователь успeшно добавлен',
            'Ошибка при добавлении пользователя'
        ]
    }
    return (
        <>
            <Card className='p-3'>
                <h3 style={{ textAlign: 'center', marginBottom: '30px' }}> Редактирование данных пользователя </h3>
                <Form>
                    <Stack gap={'3'}>
                        <FormGroup controlId='name'>
                            <Form.Label> Имя ученика </Form.Label>
                            <Form.Control
                                type='text'
                                name='name'
                                onChange={update}
                                placeholder='Введите имя ученика'
                                value={form.name} />
                        </FormGroup>
                        <FormGroup controlId='surname'>
                            <Form.Label> Фамилия </Form.Label>
                            <Form.Control
                                type='text'
                                name='surname'
                                onChange={update}
                                placeholder='Введите имя ученика'
                                value={form.surname} />
                        </FormGroup>
                        <Form.Group controlId="fromBasicPhon" className="mb-2">
                            <Form.Label>Номер телефона</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>+7</InputGroup.Text>
                                <Form.Control type="text" name='phon' placeholder='Введите номер телефона' value={form.phon} onChange={update} />
                            </InputGroup>
                        </Form.Group>
                        <div className='d-flex align-items-center mt-3 flex-wrap'>
                            <Button type="submit" className="btn-primary me-3" >Сохранить изменения</Button>
                            <ProcState procState={procState}/>
                        </div>
                    </Stack>
                </Form>
            </Card>

            <Card className='p-4 mt-4'>
                <h3 style={{ textAlign: 'center', marginBottom: '20px' }}> Изменение пароля </h3>
                <Form>
                    <Form.Group controlId="fromBasicPassword" className="mb-2">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" name='password' placeholder='Введите новый пароль' value={form.password} onChange={update} />
                    </Form.Group>
                    <Button type='submit' className='me-3'> Сохранить пароль</Button>
                </Form>
            </Card>
        </>
    );
};

export default UserEdit;