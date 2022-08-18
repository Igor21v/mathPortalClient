import React from 'react';
import { useSelector } from 'react-redux';
import './message.css'

const Message = ({ mess }) => {
    const currentUser = useSelector(state => state.user.currentUser)
    console.log('cr' + currentUser.id + '  ' + mess.authorId)
    return (
        <div className={`message ${(currentUser.id == mess.authorId) && 'message__own'}`}>
            <div>
                <div className='message__text'>
                    {mess.message}
                </div>
                <div className='message__date'>
                    {mess.date}
                </div>
            </div>

        </div>
    );
};

export default Message;