import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages, getMessagesList, sendMessage } from '../../actions/message';
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
  const checkAll = messages.length > 0 && !messages.find(message => !message.selected)
  console.log('me' + messages + ' checkAll ' + checkAll)
  const clickDeleteMessages = () => {
    let arrayForDelete = []
    messages.forEach(message => {
      if (message.selected == true) {
        arrayForDelete.push(message._id)
      }
    })
    console.log('delete ' + arrayForDelete)
    deleteMessages(arrayForDelete, chatId)
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

  /* console.log('ggg' + JSON.stringify(messages)) */

  return (
    <>
      <div className="messages">
        <form className="messages__add" onSubmit={sendHandler}>
          <input value={value} onChange={e => setValue(e.target.value)} type="text" />
          <Button type='submit'>Отправить</Button>
        </form>
        {messages.length > 0 ? <>
          <div>
            <Form.Check
              className='messages__check'
              id={'Select all message'}
              label={checkAll ? 'Снять выделение' : 'Выделить все сообщения'}
              checked={checkAll}
              onChange={checkAllMess}
            />
            <div
              className={'text-decoration-underline text-danger messages__del ' + (selected && 'messages__del-active')}
              style={{ cursor: 'pointer' }}
              onClick={clickDeleteMessages}>
              Удалить выделенные сообщения</div>
          </div>
          <div className="messages__list">
            {messages.map((mess, index) =>
              <Message key={mess._id} mess={mess} index={index} selected={selected} />
            )}
          </div>
        </> :
          <div className='messages__none'>Сообщений пока что нет </div>}
      </div>
    </>
  )
}
