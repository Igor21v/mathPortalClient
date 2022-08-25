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
    const [drag, setdrag] = useState()
    function dragHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setdrag(true)
        console.log('dragHandler')
    }
    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setdrag(false)
        console.log('dragLeaveHandler')
    }
    function dropHandler(event) {
        console.log('dropHandler')
        event.preventDefault()
        event.stopPropagation()
        
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(postUserFile(userExtend._id, 'General', file)))
        setdrag(false)
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
        <Card className='user-files' /* ondrag={dragHandler} */ /* onDrop={dropHandler}  *//* onDragLeave={dragLeaveHandler} */ onDragOver={dragHandler} >
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
            {drag &&
                <div className='user-files__drop-area' onDrop={dropHandler} onDragLeave={dragLeaveHandler} onDragOver={dragHandler}>
                    Для добавления файлов поместите их в эту область
                </div>}
        </Card>

    );
};

export default UserFiles;