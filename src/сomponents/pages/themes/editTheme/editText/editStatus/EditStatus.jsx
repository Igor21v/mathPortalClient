import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setProcessStatus } from '../../../../../../reducers/themeReduser';

const EditStatus = () => {
    const processStatus = useSelector(state => state.themes.processStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProcessStatus(''))
    }, [])
    let content = ''
    let className = ''
    switch (processStatus) {
        case 'Processing':
            content = 'Сохранение изменений...'
            className = 'text-info'
            break;
        case 'Success':
            content = 'Тема успешно отредактирована'
            className = 'text-success'
            break;
        case 'Error' :
            content = 'Ошибка при редактировании темы'
            className = 'text-danger'
            break;
        default:
            content = ''
            break;
    } 
    console.log('ProcessStatus: ' + processStatus)
    return (
        <>
            <span className={className}>{content}</span>
        </>
    );
};

export default EditStatus;