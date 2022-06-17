import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserExtend } from '../../../../../../actions/user';
import { setUserExtend } from '../../../../../../reducers/userReducer';
import DropdownFilter from '../../../../../../utils/dropdownFilter/DropdownFilter';
import FileList from '../../../../../../utils/fileList/FileList';
import IconEdit from '../../../../../icons/iconEdit/IconEdit';

const UserPage = () => {

    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id === param.id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserExtend(param.id))
        return () => {
            dispatch(setUserExtend({}))
        }
    }, [])
    const userExtend = useSelector(state => state.user.userExtend)

    return (
        <>
            <h3 style={{ textAlign: 'center' }}>
                Страничка ученика: {user?.surname} {user?.name}
                &#160;
                <IconEdit props={{ ref: `/account/controlUser/userEdit/${user._id}`, hint: 'Редактировать данные или удалить пользователя', position: 'bottom' }} />
            </h3>
            <Card className='p-3 mt-3' >
                <div>
                    <h4 className='text-center' >Файлы</h4>
                    &#160;
                    <div style={{ position: 'absolute', right: '3rem', top: '1rem' }}>
                        <DropdownFilter />
                    </div>
                </div>
                <FileList files={userExtend.files} userId={param.id} />

            </Card><Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>


            </Card>

        </>
    );
};

export default UserPage;