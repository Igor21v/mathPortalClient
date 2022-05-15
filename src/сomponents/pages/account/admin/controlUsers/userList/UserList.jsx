import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { getUserList } from '../../../../../../actions/user';

const UserList = () => {
    const dispatch = useDispatch()
    useEffect ( () => {
        console.log('Запрос пользователей')
        dispatch(getUserList())},
        []
    )
    const userList = useSelector(state => state.user.userList)
    console.log('Список в юзерлист ' + JSON.stringify(userList))
    return (
        <Card className='p-3 shadow-sm'>
        <h3 style={{textAlign: 'center'}}>Список учеников</h3>
        </Card>
    );
};

export default UserList;