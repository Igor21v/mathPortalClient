import React, { useEffect } from 'react';
import { Button, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import FileList from '../../../../../../utils/fileList/FileList';
import IconEdit from '../../../../../icons/iconEdit/IconEdit';

const UserPage = () => {

    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id === param.id)
    console.log('user' + JSON.stringify(user))
    return (
        <>
            <Card className='p-3'>
                <h3 style={{ textAlign: 'center' }}> Страничка ученика: {user?.surname} {user?.name}</h3>
                <div style={{ position: 'absolute', right: '8px' }}>
                    <IconEdit props={{ ref: `/account/controlUser/userEdit/${user._id}`, hint: 'Редактировать или удалить данные пользователя', position: 'bottom' }} />
                </div>
            </Card>
            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Файлы</h4>
                <FileList files = {user.files} userId = {user._id} />
                
            </Card><Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
                
                
            </Card>

        </>
    );
};

export default UserPage;