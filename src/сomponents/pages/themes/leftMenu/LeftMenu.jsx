import React from 'react';
import { Dropdown, Form, Stack } from 'react-bootstrap';

const LeftMenu = () => {
    return (
        <>
            <Stack gap={3} className="d-grid"> 
                < Dropdown className="d-grid">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                        Режим отображения
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Все темы</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Только опубликованные</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">В разработке</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >
                
                <Form.Control type="text" placeholder="Поиск темы" />
            </Stack>
        </>
    );
};

export default LeftMenu;