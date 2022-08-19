import React from 'react';
import { useSelector } from 'react-redux';
import getDateTime from '../../../utils/getDate&Time';
import './message.css'

const Message = ({ mess }) => {
    const currentUser = useSelector(state => state.user.currentUser)
    const dateTime = getDateTime(mess.date)
    

    return (
        <div className={`message ${(currentUser.id == mess.authorId) && 'message__own'}`}>
            
            <div className='message__text' >
                {mess.message}
            </div>
            <div className='message__date' >
                {dateTime}
            </div>
            
            

            
        </div>
    );
};

export default Message;