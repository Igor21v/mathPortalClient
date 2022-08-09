import React, {useEffect} from 'react';
import Chat from './chat/Chat';
import UserFiles from './userFiles/UserFiles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserExtend } from '../../../actions/user';
import { setUserExtend } from '../../../reducers/userReducer';

const UserPage = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    const param = useParams()
    const dispatch = useDispatch()
    let userId
    if (currentUser.role === 'ADMIN') {
        userId = param.id
    } else {
        userId = currentUser.id
    }
    useEffect(() => {
        console.log('user.id' + userId)
        dispatch(getUserExtend(userId, 'General'))
        return () => {
            dispatch(setUserExtend({}))
        }
    }, [])
    return (
        <>
            <UserFiles />
            <Chat chatId={userId}/>
        </>
    );
};

export default UserPage;