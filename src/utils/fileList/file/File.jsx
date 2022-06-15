import React from 'react';
import icon_pdf from '../../../assets/img/pdf.svg';
import icon_basket from '../../../assets/img/basket.svg';
import './file.css'
import { useDispatch } from 'react-redux';
/* import { deleteUserFile } from '../../../../../../../actions/user'; */

const File = (props) => {
    const dispatch = useDispatch()
    const delUserFile = e => {
        e.preventDefault()
        console.log('удалить файл')
        /* dispatch(deleteUserFile(props.userId, props.file)) */
    }

    const getUserFile = () => {
        console.log('Будет экщен!')
    }

    

    return (
        <div className='file-theme' onClick={getUserFile}>
           <img src={icon_basket} alt="" className='file-theme__basket' onClick={delUserFile}/>   
            <img src={icon_pdf} alt="" />
            <span> {props.file} </span>
        </div>
    );
};

export default File;