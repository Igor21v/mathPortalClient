import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { contentPage } from '../../../../../reducers/appReducer';

const LeftMenu = () => {
    const dispatch = useDispatch()
    return (
        <Stack gap={3}>
            <Button onClick={() => dispatch(contentPage('users'))}> Управление пользователями</Button>
            <Button onClick={() => dispatch(contentPage('themes'))}> Управление темами</Button>
            <Button onClick={() => dispatch(contentPage('settings'))}> Настройки</Button>
        </Stack>
    );
};

export default LeftMenu;

/* dispatch(contentPage('users')) */