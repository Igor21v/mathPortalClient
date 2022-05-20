import React, { useEffect } from 'react';
import Profile from '../../../../profile/Profile';
import { API_URL } from "../../../../../config";
import { useSelector, useDispatch } from "react-redux";
import avatarLogo from '../../../../../assets/img/avatar.svg'
import Registration from './registration/Registration';
import UserList from './userList/UserList';
import { getUserList } from '../../../../../actions/user';
import { Route, Routes } from 'react-router-dom';
import UserPage from './userPage/UserPage';
import UserEdit from './userEdit/UserEdit';
import ControlUsers from './ControlUsers'


const ControlUsersRout = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Запрос пользователей')
        dispatch(getUserList())
    },
        []
    )
    return (
        <>
            <Routes>
                <Route path={`*`} element={<ControlUsers />} />
                <Route path={`userPage/:id`} element={<UserPage />} />
                <Route path={`userEdit/:id`} element={<UserEdit />} />
            </Routes>

        </>
    );
};

export default ControlUsersRout;