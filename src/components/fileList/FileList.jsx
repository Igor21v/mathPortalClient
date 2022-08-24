import React from 'react';
import { useState } from 'react';
import File from './file/File';
import './fileList.css'

const FileList = (props) => {
    const [dragEnter, setDragEnter] = useState()
    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        /* let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir))) */
        setDragEnter(false)
    }
    return ( !dragEnter ?
        <div className='file-list' onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
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
        :
        <div onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Для добавления файлов поместите их сюда
        </div>
    );
};

export default FileList;