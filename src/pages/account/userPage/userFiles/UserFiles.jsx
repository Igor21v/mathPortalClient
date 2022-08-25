import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postUserFile } from '../../../../actions/file';
import FileList from '../../../../components/fileList/FileList';
import ProcState from '../../../../components/procState/ProcState';
import './userFiles.css'

const UserFiles = () => {
    const dispatch = useDispatch()
    let inputFiles = React.createRef()
    const userExtend = useSelector(state => state.user.userExtend)
    const [dragEnter, setDragEnter] = useState()
    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
        console.log('dragEnterHandler')
    }
    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
        console.log('dragLeaveHandler')
    }
    function dropHandler(event) {
        console.log('dropHandler')
        event.preventDefault()
        event.stopPropagation()
        
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(postUserFile(userExtend._id, 'General', file)))
        setDragEnter(false)
    }
    function fileUploadHandler() {
        const files = [...inputFiles.current.files]
        files.forEach(file => dispatch(postUserFile(userExtend._id, 'General', file)))
        console.log('отправка файла на сервер, userExtend.id ' + userExtend._id)
    }
    const procState = {
        state: [
            'Выполняется добавление файлов...',
            'Файлы успешно добавлены',
            'Ошибка при добавлении файлов.'
        ],
        index: 0
    }

    return (
        <Card className='user-files' /* onDragEnter={dragEnterHandler} */ /* onDrop={dropHandler}  *//* onDragLeave={dragLeaveHandler} */ onDragOver={dragEnterHandler} >
            <h4 className='text-center'>Файлы</h4>

            <>
                <FileList files={userExtend.files} userId={userExtend._id} folder={'General'} />
                <Form className='border p-3 rounded-3 mt-4'>
                    <Form.Group controlId="Add files">
                        <Form.Label>Добавить файлы</Form.Label>
                        <Form.Control type="file" multiple className='mb-3' ref={inputFiles} />
                        <Button className='me-2' onClick={fileUploadHandler}>Добавить</Button>
                        <ProcState procState={procState} />
                    </Form.Group>
                </Form>
            </>
            {dragEnter &&
                <div className='user-files__drop-area' onDrop={dropHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                    Для добавления файлов поместите их в эту область
                </div>}
        </Card>

    );
};

export default UserFiles;