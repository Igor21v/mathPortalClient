import React, { useEffect, useState, useRef }  from 'react'
import { Button } from 'react-bootstrap';
import './messages.css'

export default function Chat() {
  const [username, setUsername] = useState('')
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState('');
  const socket = useRef()
  

  useEffect(() => {
    connect()
  }, [])
  function connect() {
    socket.current = new WebSocket('ws://localhost:8080')

    socket.current.onopen = () => {
      const message = {
        event: 'connection',
        username,
        id: Date.now()
      }
      socket.current.send(JSON.stringify(message))
      console.log('Socket открыт')
    }
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages(prev => [message, ...prev])
    }
    socket.current.onclose = () => {
      console.log('Socket закрыт')
    }
    socket.current.onerror = () => {
      console.log('Socket произошла ошибка')
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    const message = {
      username,
      message: value,
      id: Date.now(),
      event: 'message'
    }
    socket.current.send(JSON.stringify(message));
    setValue('')
  }
  return (
    <>
      <div className="messages">
          <form className="messages__add" onSubmit={sendMessage}>
            <input value={value} onChange={e => setValue(e.target.value)} type="text" />
            <Button type='submit'>Отправить</Button>
          </form>
          <div className="messages__list">
            {messages.map(mess =>
              <div key={mess.id}>
                {mess.event === 'connection'
                  ? <div className="messages__connection-message">
                    Пользователь {mess.username} подключился
                  </div>
                  : <div className="messages__message">
                    {mess.username}. {mess.message}
                  </div>
                }
              </div>
            )}
          </div>
      </div>
    </>
  )
}
