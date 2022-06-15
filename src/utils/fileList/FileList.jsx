import React from 'react';
import File from './file/File';
import './fileList.css'

const FileList = (props) => {
    console.log('props.files' + props.files)
    return (
        <>
            {props.files && props.files != 0 ?
                <div className='file-list'>
                    {props.files.map(file =>
                        <File key={file} file={file} />
                    )}
                </div>
                :
                <span> Файлов пока нет... </span>}
        </>
    );
};

export default FileList;