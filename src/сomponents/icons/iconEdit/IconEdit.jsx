import React from 'react';
import { useNavigate } from 'react-router-dom';
import './iconEdit.css'

const IconEdit = ({props}) => {
    const router = useNavigate()
    console.log(JSON.stringify(props))
    return (
        <div className='iconedit'>
            <img className='iconedit__icon'
                onClick={() => router(props.ref)}
                src="/edit.svg"
                width="36"
                height="36"
                alt=""
                />
            <div className='iconedit__text'>Редактировать или удалить</div>
        </div>
    );
};

export default IconEdit;