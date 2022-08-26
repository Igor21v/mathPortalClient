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
    const limit = useState(20)
    const messages = useSelector(state => state.messages.messages)
    const totalMessages = useSelector(state => state.messages.totalMessages)
    const currentPage = useSelector(state => state.messages.currentPage)


    return (
        <div >
           <PaginationComp totalPages={6} page={2} changePage= {()=>console.log('ffffxxxx')}/>
        </div>
    );
};

export default MesPagination;