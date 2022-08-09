import React from 'react';
import { Card } from 'react-bootstrap';
import Messages from '../../../../components/messeges/Messages';

const Messeges = ({chatId}) => {
    return (
        <>
            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
                <Messages chatId={chatId}/>
            </Card>
        </>
    );
};

export default Messeges;