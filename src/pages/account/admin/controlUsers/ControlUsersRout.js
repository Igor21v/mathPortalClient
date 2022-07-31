import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from '../../../../actions/user';
import { Route, Routes } from 'react-router-dom';
import UserView from './userView/UserView';
import UserEdit from './userEdit/UserEdit';
import ControlUsers from './ControlUsers'
import Loader from '../../../../components/loader/Loader';


const ControlUsersRout = () => {
    const userList = useSelector(state => state.user.userList)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('Запрос пользователей')
        dispatch(getUserList())
    },
        []
    )
    return (
        <>
            {(userList != {}) ?
                <Routes>
                    <Route path={`userView/:id`} element={<UserView />} />
                    <Route path={`userEdit/:id`} element={<UserEdit />} />
                    <Route path={`*`} element={<ControlUsers />} />
                </Routes>
                :
                <Loader />
            }
        </>
    );
};

export default ControlUsersRout;