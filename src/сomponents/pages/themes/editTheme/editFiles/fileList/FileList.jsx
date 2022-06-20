import React from 'react';
import File from './file/File';
import './fileList.css'

const FileList = ({ theme }) => {
    return (
        <div className='file-list-theme'>
            {theme.files.map(file =>
                <File key={file} file={file} themeId={theme._id}/>
            )}
        </div>
    );
};

export default FileList;