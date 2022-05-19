import React from 'react';
import { useNavigate } from 'react-router-dom';
import './iconEdit.css'
import {ReactComponent as Icon} from './icon.svg'

const IconEdit = ({props}) => {
    const router = useNavigate()
    console.log(JSON.stringify(props))
    return (

        <div className='iconedit'>
            <Icon className='iconedit__icon'
                onClick={() => router(props.ref)}
                width="36"
                height="36"
                />
            <div className='iconedit__text iconedit__text-bottom'>{props.hint}</div>
        </div>
    );
};

export default IconEdit;