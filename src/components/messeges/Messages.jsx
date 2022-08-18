import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList, sendMessage } from '../../actions/message';
import { setCurrentChat, setMessage } from '../../reducers/messageReducer';
import Message from './message/Message';
import './messages.css'

export default function Messages({ chatId }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages.messages)
  const sendHandler = async (e) => {
    e.preventDefault()
    sendMessage(value, chatId)
    setValue('')
  }
  useEffect(() => {
    dispatch(setCurrentChat(chatId))
    getMessagesList(chatId)
    console.log('setChatID ' + chatId)
    return () => {
      dispatch(setCurrentChat(undefined))
      dispatch(setMessage([]))
    }
  }, [])
  return (
    <>
      <div className="messages">
        <form className="messages__add" onSubmit={sendHandler}>
          <input value={value} onChange={e => setValue(e.target.value)} type="text" />
          <Button type='submit'>Отправить</Button>
        </form>
        <div className="messages__list">
          {messages.map(mess =>
            <Message key={mess._id} mess={mess} />
          )}
        </div>
      </div>
    </>
  )
}
