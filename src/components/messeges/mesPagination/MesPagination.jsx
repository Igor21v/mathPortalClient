import React, {useEffect, useState} from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList } from '../../../actions/message';
import { setCurrentChat, setMessage } from '../../../reducers/messageReducer';
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
    const messages = useSelector(state => state.messages.messages)
    const totalMessages = useSelector(state => state.messages.totalMessages)
    const currentPage = useSelector(state => state.messages.currentPage)
    
    return (
        <div >
            <Pagination className='mes-pagination'>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item> 1 </Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item> 2 </Pagination.Item>
                <Pagination.Item> 3 </Pagination.Item>
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </div>
    );
};

export default MesPagination;