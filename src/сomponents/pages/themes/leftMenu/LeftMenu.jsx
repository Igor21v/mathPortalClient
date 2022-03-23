import React, { useState } from 'react';
import { Dropdown, Form, Stack } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getThemes } from '../../../../actions/theme';



const LeftMenu = () => {
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimout] = useState(false)
    const dispatch = useDispatch()
    function searchChangeHandler(e) { 
    setSearchName(e.target.value)
    if (searchTimeout !==false){
        clearTimeout(searchTimeout)
    }    
    setSearchTimout(setTimeout((value) => {
        dispatch(getThemes("", value));
    }, 500, e.target.value))
    } 

    return (
        <>
            <Stack gap={3} className="d-grid"> 
                < Dropdown className="d-grid" >
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                        Отображать
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Все темы</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Только опубликованные</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">В разработке</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >
                
                <Form.Control 
                type="text" 
                placeholder="Поиск темы" 
                value={searchName}
                onChange={e => searchChangeHandler(e)} />
            </Stack>
        </>
    );
};

export default LeftMenu;