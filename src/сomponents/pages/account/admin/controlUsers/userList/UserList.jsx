import React, { useEffect } from 'react';
import { Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import User from './user/User';
import { getUserList } from '../../../../../../actions/user';

const UserList = () => {
    const userList = useSelector(state => state.user.userList)
    return (
        <Card className='p-3 shadow-sm'>
            <h3 style={{ textAlign: 'center' }}>Список учеников</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Номер телефона</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user => <User key={user._id} user={user} />)}
                </tbody>
            </Table>
        </Card>
    );
};

export default UserList;