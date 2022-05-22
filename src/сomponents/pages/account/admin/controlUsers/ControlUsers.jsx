import React, {useEffect} from 'react';
import Profile from '../../../../profile/Profile';
import { API_URL } from "../../../../../config";
import { useSelector, useDispatch } from "react-redux";
import avatarLogo from '../../../../../assets/img/avatar.svg'
import Registration from './registration/Registration';
import UserList from './userList/UserList';
import { getUserList } from '../../../../../actions/user';



const ControlUsers = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

    return (
        <>
            <Registration />
            <UserList />
            {/* <img className="navbar__avatar" src={avatar} alt="" />
            <Profile /> */}
        </>
    );
};

export default ControlUsers;