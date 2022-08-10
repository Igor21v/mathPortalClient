import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IconEdit from '../../../../../components/icons/iconEdit/IconEdit';
import icon_tel from '../../../../../assets/img/tel.svg';
import UserPage from '../../../userPage/UserPage';

const UserView = () => {

    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id === param.id)
    


    return (
        <>
            <h3 style={{ textAlign: 'center' }}>
                Страница: {user?.surname} {user?.name}
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