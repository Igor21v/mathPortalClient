import React from 'react';
import icon from '../../../../../../assets/img/pdf.svg';

const FileList = ({theme}) => {
    return (
        <div className='d-flex'>
        {theme.files.map (file => 
            <div className=''>
            <img src={icon} alt="" />
            <span> {file} </span>
        </div>
        )}
        </div>
        
    );
};

export default FileList;