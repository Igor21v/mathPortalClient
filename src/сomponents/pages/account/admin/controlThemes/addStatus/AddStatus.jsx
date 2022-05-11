import React, { useEffect } from 'react';
import { setProcessStatus } from '../../../../../../reducers/themeReduser';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const AddStatus = () => {
    const processStatus = useSelector(state => state.themes.processStatus)
    const theme = useSelector(state => state.themes.theme)
    console.log('ID ' + theme._id)
    const router = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProcessStatus(''))
    }, [])
    let content = ''
    let className = ''
    let content2 = ''
    let className2 = ''
    let style= ''
    switch (processStatus) {
        case 'Processing':
            content = 'Сохранение темы...'
            className = 'text-info'
            break;
        case 'Success':
            content = 'Тема успешно добалена, '
            className = 'text-success'
            content2 = 'перейти к редактированию'
            className2 = 'text-success text-decoration-underline'
            break;
        case 'Error' :
            content = 'Ошибка при добавлении темы'
            className = 'text-danger'
            break;
        default:
            content = ''
            break;
    } 
    return (
        <>
            <span className={className}>{content} </span>
            <span className={className2} onClick={() => router(`/themes/edit/${theme._id}`)} style={{cursor: 'pointer'}}>{content2} </span>
        </>
    );
};

export default AddStatus;