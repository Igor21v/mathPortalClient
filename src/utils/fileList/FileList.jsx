import React from 'react';
import File from './file/File';
import './fileList.css'

const FileList = (props) => {
    return (
        <>
            {props.files && props.files != 0 ?
                <div className='file-list'>
                    {props.files.map(file =>
                        <File key={file} props={{file, ...props}}/>
                    )}
                </div>
                :
                <span> Файлов пока нет... </span>}
        </>
    );
};

export default FileList;