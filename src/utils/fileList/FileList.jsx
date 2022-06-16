import React from 'react';
import File from './file/File';
import './fileList.css'

const FileList = (props) => {
    return (
        <>
            {props.files && props.files != 0 ?
                <div className='file-list'>
                    {props.files.map(file =>
                        <File key={file} file={file} userId={props.userId}/>
                    )}
                </div>
                :
                <span> Файлов пока нет... </span>}
        </>
    );
};

export default FileList;