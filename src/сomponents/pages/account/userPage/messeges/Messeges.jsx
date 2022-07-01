import React from 'react';
import { Card } from 'react-bootstrap';

const Messeges = ({dropdown}) => {
    return (
        <>
            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
                {dropdown}
            </Card>
        </>
    );
};

export default Messeges;