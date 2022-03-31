import React, { useEffect } from 'react';
import { setAddStatus } from '../../../../../reducers/themeReduser';
import { useDispatch, useSelector } from "react-redux";

const AddStatus = () => {
    const addStatus = useSelector(state => state.themes.addStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setAddStatus(''))
    }, [])
    let content = ''
    let className = ''
    switch (addStatus) {
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