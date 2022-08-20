import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDateTime from '../../../utils/getDate&Time';
import './message.css'
import { Form } from 'react-bootstrap'
import deleteOneElement from '../../../utils/deleteOneElement';
import { setSelectedMessage } from '../../../reducers/messageReducer';

const Message = ({ mess }) => {
    const currentUser = useSelector(state => state.user.currentUser)
    const dateTime = getDateTime(mess.date)
    let selectedMessage = useSelector(state => state.messages.selectedMessage)
    const dispatch = useDispatch()
    const select = (e) => {
        if (e.target.checked) {
            selectedMessage.push(mess._id)
        } else {
            selectedMessage = deleteOneElement(selectedMessage, mess._id)
        }
        dispatch(setSelectedMessage(selectedMessage))
    }

    return (
        <div className={`message ${(currentUser.id == mess.authorId) && 'message__own'}`}>

            <div className='message__text' >
                {mess.message}
            </div>
            <div className='message__last-row'>
                <Form.Check
                    className={selectedMessage.length > 0 ? 'message__checkbox-selected' : 'message__checkbox'}
                    type='checkbox'
                    onChange={select}
                />
                <div className='message__date' >
                    {dateTime}
                </div>
            </div>
        </div>
    );
};

export default Message;