import React from 'react';
import Profile from '../../../../profile/Profile';
import { API_URL } from "../../../../../config";
import { useSelector, useDispatch } from "react-redux";
import avatarLogo from '../../../../../assets/img/avatar.svg'
import Registration from './registration/Registration';





const ControlUsers = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo
    return (
        <>
            <Registration />
            {/* <img className="navbar__avatar" src={avatar} alt="" />
            <Profile /> */}
        </>
    );
};

export default ControlUsers;