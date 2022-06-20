import React from 'react';
import icon_download from '../../../assets/img/download.svg';
import icon_basket from '../../../assets/img/basket.svg';
import './file.css'
import { useDispatch } from 'react-redux';
import { downloadUserFile } from '../../../actions/file';
/* import { deleteUserFile } from '../../../../../../../actions/user'; */

const File = ({ props }) => {
    const dispatch = useDispatch()
    const delUserFile = e => {
       /*  e.stopPropagation() */
        console.log('удалить файл')
        /* dispatch(deleteUserFile(props.userId, props.file)) */
    }

    const getUserFile = () => {
        downloadUserFile(props.userId, props.folder, props.file)
    }
    console.log(props)


    return (
        <div className='file' >
            <img className="file__img" src={icon_download} alt="" onClick={getUserFile}/>
            <div className="file__name">{props.file}</div>
            <img className='file__basket'  src={icon_basket} alt="" onClick={delUserFile} />
            <div className="file__date">12.05.1990 21:50</div>
            <div className="file__size">506 Кб</div>
        </div>
    );
};

export default File;