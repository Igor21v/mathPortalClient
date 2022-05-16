import React, { useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = userList.find(user => user._id === param.id)
    return (
        <Card className='p-3'>
            <h3 style={{ textAlign: 'center' }}>Страничка ученика: {user.surname} {user.name} </h3>
            {/* <Form> */}
 
            {/* </Form> */}
        </Card>
    );
};

export default UserPage;