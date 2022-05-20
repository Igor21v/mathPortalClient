import React from 'react';
import { useNavigate } from 'react-router-dom';
import './iconEdit.css'
import {ReactComponent as Icon} from './icon.svg'

const IconEdit = ({props}) => {
    const router = useNavigate()
    console.log(JSON.stringify(props))
    let position
    console.log(props.position)
    switch (props.position) {
        case 'bottom':
            position = 'iconedit__text-bottom'
            break;
        default:
            position = 'iconedit__text'
    }
    console.log(position)
    return (

        <div className='iconedit'>
            <Icon className='iconedit__icon'
                onClick={() => router(props.ref)}
                width="36"
                height="36"
                />
            <div className= {position}>{props.hint}</div>
        </div>
    );
};

export default IconEdit;