import React from 'react';
import { Card } from 'react-bootstrap';
import Chat from '../../../../components/chat/Chat';

const Messeges = () => {
    return (
        <>
            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
                <Chat/>
            </Card>
        </>
    );
};

export default Messeges;