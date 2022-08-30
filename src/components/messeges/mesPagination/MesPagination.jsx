import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList } from '../../../actions/message';
import { setCurrentChat, setMessage } from '../../../reducers/messageReducer';
import PaginationComp from '../../pagination/PaginationComp';
import './mesPagination.css'

const MesPagination = ({chatId}) => {
    const totalMessages = /* useSelector(state => state.messages.totalMessages) */200
    const reqPage = (page, limit) => {
      console.log('ffffxxxx' + page + ' vv ' + chatId)
      getMessagesList(chatId, page, limit)
    }


    return (
        <div >
           <PaginationComp totalItems={totalMessages} reqPage= {reqPage}/>
        </div>
    );
};

export default MesPagination;