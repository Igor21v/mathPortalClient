import React, { useEffect, useState, useRef }  from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../actions/messages';
import './messages.css'

export default function Chat({chatId}) {
  const [value, setValue] = useState('');
  const socket = useSelector(state=>state.messages.socket)
  const messages = useSelector(state=>state.messages.messages)
  const user = useSelector(state=>state.user.currentUser)
  const sendHandler = async (e) => {
    e.preventDefault()
    sendMessage(value, chatId)
    setValue('')
  }
  return (
    <>
      <div className="messages">
          <form className="messages__add" onSubmit={sendHandler}>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
            <Button type='submit'>Отправить</Button>
          </form>
          <div className="messages__list">
            {messages.map(mess =>
              <div key={mess.id}>
                {mess.event === 'connection'
                  ? <div className="messages__connection-message">
                    Пользователь подключился
                  </div>
                  : <div className="messages__message">
                    {mess.username}: {mess.message}
                  </div>
                }
              </div>
            )}
          </div>
      </div>
    </>
  )
}
