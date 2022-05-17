import React, { useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const UserPage = () => {
    const param = useParams()
    const router = useNavigate ()
    const userList = useSelector(state => state.user.userList)
    const user = userList.find(user => user._id === param.id)
    return (
        <Card className='p-3'>
            <h3 style={{ textAlign: 'center' }}>Страничка ученика: {user.surname} {user.name} </h3>
            <img style={{ cursor: 'pointer', position: 'absolute', right: '8px' }}
                onClick={() => router(`/themes/edit/${user._id}`)}
                src="/edit.svg"
                width="36"
                height="36"
                alt=""
            />

        </Card>
    );
};

export default UserPage;