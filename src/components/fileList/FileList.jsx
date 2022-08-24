import React from 'react';
import File from './file/File';
import './fileList.css'

const FileList = (props) => {
    return (
        <div className='file-list'>
            {props.files && props.files != 0 ?
                <>
                    <div className="filelist__header">
                        <div className="filelist__name">Название</div>
                        <div className="filelist__date">Дата</div>
                        <div className="filelist__size">Размер</div>
                    </div>
                    {props.files.map(file =>
                        <File key={file.name} props={{ file, ...props }} />
                    )}
                </>
                :
                <span> Файлов пока нет... </span>}
        </div>
    );
};

export default FileList;