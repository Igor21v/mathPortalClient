import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesList, sendMessage } from '../../actions/message';
import { setCurrentChat, setMessage, setSelectedMessage } from '../../reducers/messageReducer';
import Message from './message/Message';
import './messages.css'
import { Form } from 'react-bootstrap';

export default function Messages({ chatId }) {
  const [value, setValue] = useState('');
  const [checkAll, setCheckAllMess] = useState(false)
  const dispatch = useDispatch()
  const messages = useSelector(state => state.messages.messages)
  const selectedMessage = useSelector(state => state.messages.selectedMessage)
  const sendHandler = async (e) => {
    e.preventDefault()
    sendMessage(value, chatId)
    setValue('')
  }
  const checkAllMess = e => {
    if (e.target.checked) {
      setCheckAllMess(true)
      dispatch(setSelectedMessage(messages.map(message => message._id)))
    } else {
      setCheckAllMess(false)
      dispatch(setSelectedMessage([]))
    }
  }
  useEffect(() => {
    dispatch(setCurrentChat(chatId))
    getMessagesList(chatId)
    console.log('setChatID ' + chatId)
    return () => {
      dispatch(setCurrentChat(undefined))
      dispatch(setMessage([]))
      dispatch(setSelectedMessage([]))
    }
  }, [])
  console.log('ss ' + selectedMessage)

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
            label={'Выделить все сообщения'}
            checked={checkAll}
            onChange={checkAllMess}
          />
          <div
            className={'text-decoration-underline text-danger messages__del ' + ((selectedMessage.length>0) && 'messages__del-active') }
            style={{ cursor: 'pointer' }}>
            Удалить выделенные сообщения</div>
        </div>
        <div className="messages__list">
          {messages.map(mess =>
            <Message key={mess._id} mess={mess} />
          )}
        </div>
      </div>
    </>
  )
}
