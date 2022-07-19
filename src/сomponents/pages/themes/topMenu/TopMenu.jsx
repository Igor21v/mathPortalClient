import React, { useEffect, useState } from 'react';
import { Dropdown, Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../../hooks/useDebounce';
import { setShowThemes, setSearchThemes, setShowThemesLoading } from '../../../../reducers/themeReducer';



const TopMenu = () => {
    const [searchTimeout, setSearchTimout] = useState(false)
    const searchThemes = useSelector(state => state.themes.searchThemes)
    const [searchField, setSearchField] = useState(searchThemes)
    const userRole = useSelector(state => state.user.currentUser.role)
    const dispatch = useDispatch()
    const debouncedSearch = useDebounce((value) => dispatch(setSearchThemes(value)), 500)

    function searchChangeHandler(e) {
        setSearchField(e.target.value)
        debouncedSearch(e.target.value)
    }

    useEffect(() => {
        if (userRole === 'ADMIN') {
            dispatch(setShowThemes('all'))
        } else {
            dispatch(setShowThemes('onlyPublic'))
            }
        dispatch(setShowThemesLoading(false))
        console.log('установлен setShowThemesLoading в false')
        return ( () => {
            console.log('установлен setShowThemesLoading в true при демонтировании компонента')
            dispatch(setShowThemesLoading(true))
        })
    }, [userRole]
    )

    return (

        <>
            <Stack gap={3} direction='horizontal' >
                <Form.Control
                    type="text"
                    placeholder="Поиск темы"
                    value={searchField}
                    onChange={searchChangeHandler} />

                {(userRole === 'ADMIN')&&< Dropdown className="d-grid" onSelect={(eventKey) => dispatch(setShowThemes(eventKey))}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                        Отображать
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item eventKey='all'>Все темы</Dropdown.Item>
                        <Dropdown.Item eventKey='onlyPublic'>Только опубликованные</Dropdown.Item>
                        <Dropdown.Item eventKey='onlyDev'>В разработке</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown >}
            </Stack>
        </>

    );
};

export default TopMenu;