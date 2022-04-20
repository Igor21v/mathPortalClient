import React, { useEffect } from 'react';
import { setProcessStatus } from '../../../../../reducers/themeReduser';
import { useDispatch, useSelector } from "react-redux";

const AddStatus = () => {
    const processStatus = useSelector(state => state.themes.processStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProcessStatus(''))
    }, [])
    let content = ''
    let className = ''
    switch (processStatus) {
        case 'Processing':
            content = 'Сохранение темы...'
            className = 'text-info'
            break;
        case 'Success':
            content = 'Тема успешно добалена'
            className = 'text-success'
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
            <span className={className}>{content}</span>
        </>
    );
};

export default AddStatus;