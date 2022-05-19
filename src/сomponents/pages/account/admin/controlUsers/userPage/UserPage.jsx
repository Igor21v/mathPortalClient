import React, { useEffect } from 'react';
import { Button, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import IconEdit from '../../../../../icons/iconEdit/IconEdit';

const UserPage = () => {
    const param = useParams()
    
    const userList = useSelector(state => state.user.userList)
    const user = userList.find(user => user._id === param.id)
    return (
        <Card className='p-3'>
            <h3 style={{textAlign: 'center'}}> Страничка ученика: {user.surname} {user.name}</h3>
            <div style= {{position: 'absolute', right: '8px'}}>
            <IconEdit props={{ref: `/account/userEdit/${user._id}`, hint: 'Редактировать или удалить данные пользователя'}}/>
            </div>
        </Card>
    
    );
};

export default UserPage;