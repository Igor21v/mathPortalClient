import React from 'react';
import icon_download from '../../../assets/img/download.svg';
import icon_basket from '../../../assets/img/basket.svg';
import './file.css'
import { useDispatch } from 'react-redux';
import { downloadUserFile, deleteUserFile } from '../../../actions/file';
import sizeFormat from '../../../utils/sizeFormat';
import getDateTime from '../../../utils/getDateTime';

const File = ({ props }) => {
    const dispatch = useDispatch()
    const delUserFile = e => {
        dispatch(deleteUserFile(props.userId, props.folder, props.file.name))
    }

    const getUserFile = () => {
        downloadUserFile(props.userId, props.folder, props.file)
    }
    console.log(props)
    const dateTime = getDateTime(props.file.time)

    return (
        <div className='file' >
            <img className="file__img" src={icon_download} alt="" onClick={getUserFile}/>
            <div className="file__name">{props.file.name}</div>
            <img className='file__basket'  src={icon_basket} alt="" onClick={delUserFile} />
            <div className="file__date">{dateTime}</div>
            <div className="file__size">{sizeFormat(props.file.size)}</div>
        </div>
    );
};

export default File;