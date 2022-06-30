import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postUserFile } from '../../../../../../actions/file';
import { getListThemes } from '../../../../../../actions/theme';
import { getUserExtend } from '../../../../../../actions/user';
import { setUserExtend } from '../../../../../../reducers/userReducer';
import DropdownFilter from '../../../../../../utils/dropdownFilter/DropdownFilter';
import FileList from '../../../../../../utils/fileList/FileList';
import ProcState from '../../../../../../utils/procState/ProcState';
import IconEdit from '../../../../../icons/iconEdit/IconEdit';
import icon_tel from '../../../../../../assets/img/tel.svg';
import UserPage from '../../../userPage/UserPage';

const UserView = () => {

    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id === param.id)
    


    return (
        <>
            <h3 style={{ textAlign: 'center' }}>
                Страничка ученика: {user?.surname} {user?.name}
                &#160;
                <IconEdit props={{ ref: `/account/controlUser/userEdit/${user._id}`, hint: 'Редактировать данные или удалить пользователя', position: 'bottom' }} />
                &#160;
                <a href='https://t.me/+79501166910'>
                    <img src={icon_tel} alt="" />
                </a>
            </h3>
            <UserPage/>
        </>
    );
};

export default UserView;