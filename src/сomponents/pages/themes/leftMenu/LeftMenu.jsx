import React, { useState } from 'react';
import { Dropdown, Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowThemes, setSearchThemes } from '../../../../reducers/themeReduser';



const LeftMenu = () => {
    const [searchTimeout, setSearchTimout] = useState(false)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const [searchField, setSearchField] = useState(searchThemes)
    const dispatch = useDispatch()

    function searchChangeHandler(e) {
        setSearchField(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        setSearchTimout(setTimeout((value) => {
            dispatch(setSearchThemes(value));
        }, 500, e.target.value))
    }

    return (
        <>
            <Stack gap={3} className="d-grid">
                < Dropdown className="d-grid" onSelect={(eventKey) => dispatch(setShowThemes(eventKey))}>

                    <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                        Отображать
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item eventKey='all'>Все темы</Dropdown.Item>
                        <Dropdown.Item eventKey='onlyPublic'>Только опубликованные</Dropdown.Item>
                        <Dropdown.Item eventKey='onlyDev'>В разработке</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >

                <Form.Control
                    type="text"
                    placeholder="Поиск темы"
                    value={searchField}
                    onChange={e => searchChangeHandler(e)} />
            </Stack>
        </>
    );
};

export default LeftMenu;