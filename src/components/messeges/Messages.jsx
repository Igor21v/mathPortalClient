import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList, sendMessage } from '../../actions/message';
import { changeOneMessage, setCurrentChat, setMessage, setSelectedMessage } from '../../reducers/messageReducer';
import Message from './message/Message';
import './messages.css'
import { Form } from 'react-bootstrap';

export default function Messages({ chatId }) {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages.messages)
  const selected = messages.find((message) => message.selected == true)
  const sendHandler = async (e) => {
    e.preventDefault()
    sendMessage(value, chatId)
    setValue('')
  }
  const checkAllMess = e => {
    const newMessages = messages.map(message => {
      message.selected = e.target.checked
      return message
    })
    dispatch(setMessage(newMessages))
  }
  const checkAll = !messages.find(message => !message.selected)
  useEffect(() => {
    dispatch(setCurrentChat(chatId))
    getMessagesList(chatId)
    console.log('setChatID ' + chatId)
    return () => {
      dispatch(setCurrentChat(undefined))
      dispatch(setMessage([]))
    }
  }, [])
  /* console.log('ggg' + JSON.stringify(messages)) */

  return (
    <>
      <div className="messages">
        <form className="messages__add" onSubmit={sendHandler}>
          <input value={value} onChange={e => setValue(e.target.value)} type="text" />
          <Button type='submit'>Отправить</Button>
        </form>
        <div>
          <Form.Check
            className='messages__check'
            id={'Select all message'}
            label={checkAll?'Снять выделение':'Выделить все сообщения'}
            checked={checkAll}
            onChange={checkAllMess}
          />
          <div
            className={'text-decoration-underline text-danger messages__del ' + (selected && 'messages__del-active')}
            style={{ cursor: 'pointer' }}>
            Удалить выделенные сообщения</div>
        </div>
        <div className="messages__list">
          {messages.map((mess, index) =>
            <Message key={mess._id} mess={mess} index={index} selected={selected} />
          )}
        </div>
      </div>
    </>
  )
}
