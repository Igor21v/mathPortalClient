import React from 'react';
import File from './file/FilePlate';
import './fileListPlate.css'

const FileListPlate = ( props ) => {
    return (
        <div className='file-list-plate'>
            {props.theme.files.map(file =>
                <File key={file} file={file} themeId={props.theme._id} changeable={props.changeable}/>
            )}
        </div>
    );
};

export default FileListPlate;