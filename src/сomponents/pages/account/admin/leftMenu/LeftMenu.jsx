import React from 'react';
import { Stack, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    return (
        <Stack  gap={2} className='border rounded-2 p-2 bg-white shadow-sm'>
            <Link to="/account/controlUser/">
                <Button className='w-100'>Управление пользователями</Button>
            </Link>
            <Link to="/account/themes">
                <Button className='w-100'>Управление темами</Button>
            </Link>
            <Link to="/account/general">
                <Button className='w-100'>Настройки</Button>
            </Link>
        </Stack>
    );
};

export default LeftMenu;

/* dispatch(contentPage('users')) */