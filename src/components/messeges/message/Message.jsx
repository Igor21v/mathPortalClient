import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDateTime from '../../../utils/getDate&Time';
import './message.css'
import { Form } from 'react-bootstrap'
import deleteOneElement from '../../../utils/deleteOneElement';
import { changeOneMessage } from '../../../reducers/messageReducer';

const Message = (props) => {
    const currentUser = useSelector(state => state.user.currentUser)
    const dateTime = getDateTime(props.mess.date)
    const dispatch = useDispatch()
    const selectOneMessage = (e) => {
        let mess = props.mess
        mess.selected = e.target.checked
        dispatch(changeOneMessage({ index: props.index, mess }))
    }
    const checked = props.mess.selected ? true : false

    return (
        <div className={`message ${(currentUser.id == props.mess.authorId) && 'message__own'}`}>

            <div className='message__text' >
                {props.mess.message}
            </div>
            <div className='message__last-row'>
                <Form.Check
                    className={props.selected ? 'message__checkbox-selected' : 'message__checkbox'}
                    checked={checked}
                    onChange={selectOneMessage}
                />
                <div className='message__date' >
                    {dateTime}
                </div>
            </div>
        </div>
    );
};

export default Message;