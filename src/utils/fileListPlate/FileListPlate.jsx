import React from 'react';
import File from './file/FilePlate';

const FileListPlate = (props) => {
    return (
        <>
            {props.theme.files && props.theme.files != 0 ?
                <>{props.theme.files.map(file =>
                    <File key={file} file={file} themeId={props.theme._id} changeable={props.changeable} />
                )} </>
                :
                <span> Файлов пока что нет... </span>}
        </>
    );
};

export default FileListPlate;