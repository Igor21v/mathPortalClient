import React from 'react';
import { Card } from 'react-bootstrap';
import Messages from '../../../../components/messeges/Messages';

const Messeges = () => {
    return (
        <>
            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
                <Messages/>
            </Card>
        </>
    );
};

export default Messeges;