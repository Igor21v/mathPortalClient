import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList } from '../../../actions/message';
import { setCurrentChat, setMessage } from '../../../reducers/messageReducer';
import PaginationComp from '../../pagination/PaginationComp';
import './mesPagination.css'

const MesPagination = ({chatId}) => {
    /* const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentChat(chatId))
        getMessagesList(chatId)
        return () => {
          dispatch(setCurrentChat(undefined))
          dispatch(setMessage([]))
        }
      }, []) */
    /* const messages = useSelector(state => state.messages.messages) */
    const totalMessages = /* useSelector(state => state.messages.totalMessages) */200
    const currentPage = useSelector(state => state.messages.currentPage)


    return (
        <div >
           <PaginationComp totalItems={totalMessages} reqPage= {(page)=>console.log('ffffxxxx' + page)}/>
        </div>
    );
};

export default MesPagination;