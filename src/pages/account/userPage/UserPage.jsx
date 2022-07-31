import React from 'react';
import Chat from './chat/Chat';
import UserFiles from './userFiles/UserFiles';

const UserPage = () => {
    return (
        <>
            <UserFiles />
            <Chat />
        </>
    );
};

export default UserPage;