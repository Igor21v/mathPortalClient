import React from 'react';
import icon_pdf from '../../../assets/img/file.svg';
import icon_basket from '../../../assets/img/basket.svg';
import './file.css'
import { useDispatch } from 'react-redux';
import { downloadUserFile } from '../../../actions/file';
/* import { deleteUserFile } from '../../../../../../../actions/user'; */

const File = (props) => {
    const dispatch = useDispatch()
    const delUserFile = e => {
        e.stopPropagation()
        console.log('удалить файл')
        /* dispatch(deleteUserFile(props.userId, props.file)) */
    }

    const getUserFile = () => {
        downloadUserFile(props.userId, props.file)
    }

    

    return (
        <div className='file-one' onClick={getUserFile}>
           <img src={icon_basket} alt="" className='file-one__basket' onClick={delUserFile}/>   
            <img src={icon_pdf} alt="" />
            <span> {props.file} </span>
        </div>
    );
};

export default File;