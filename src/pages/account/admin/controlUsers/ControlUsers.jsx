import React, {useEffect} from 'react';
import Registration from './registration/Registration';
import UserList from './userList/UserList';

const ControlUsers = () => {

    return (
        <>
            <UserList />
            <Registration />
            {/* <img className="navbar__avatar" src={avatar} alt="" />
            <Profile /> */}
        </>
    );
};

export default ControlUsers;