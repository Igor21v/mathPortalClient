import React from 'react';
import icon from '../../../../../../../assets/img/pdf.svg';
import { API_URL } from '../../../../../../../config';
import './file.css'

const File = (props) => {
    return (
        <a className='file-theme' href={ API_URL + 'themes/' + props.themeId + '/' + props.file}>
            <img src={icon} alt="" />
            <span> {props.file} </span>
        </a>
    );
};

export default File;