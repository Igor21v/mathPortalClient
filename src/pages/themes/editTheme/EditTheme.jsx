import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import EditText from './editText/EditText';
import EditFiles from './editFiles/EditFiles';
import EditImage from './editImage/EditImage';
import { getTheme } from '../../../actions/theme';
import { setTheme } from '../../../reducers/themeReducer';
import Loader from '../../../components/loader/Loader';


const EditTheme = () => {
    const param = useParams()
    const theme = useSelector(state => state.themes.theme)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTheme(param.id))
        return (() => {
            dispatch(setTheme(''))
        }
        )
    }, [])
    return (
        <>
            {theme ?
                <Container className='mb-3 mt-3'>
                    <h2 style={{ textAlign: 'center' }}>Изменение темы с ID: {param.id}</h2>
                    <EditImage theme={theme} />
                    <EditFiles theme={theme} />
                    <EditText theme={theme} />
                </Container>
                :
                <Loader/>
            }
        </>
    );
};

export default EditTheme;