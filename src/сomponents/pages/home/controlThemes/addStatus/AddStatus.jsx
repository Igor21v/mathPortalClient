import React, { useEffect } from 'react';
import { setAddStatus } from '../../../../../reducers/themeReduser';
import { useDispatch, useSelector } from "react-redux";

const AddStatus = () => {
    const addStatus = useSelector(state => state.themes.addStatus)
    const dispatch = useDispatch
    useEffect(() => {
        dispatch(setAddStatus(''))
    }, [])
    return (
        <>
           {/*  {addStatus === 'Success' ?
                <span className="text-success ms-3">Тема успешно добалена</span>
                :
                addStatus === 'Error' ?
                    <span className="text-danger ms-3">Ошибка при добавлении темы</span>
                    :
                    ''
            } */}
        </>
    );
};

export default AddStatus;