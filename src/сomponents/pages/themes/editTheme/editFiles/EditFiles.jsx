import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postFile } from '../../../../../actions/theme';
import FileListPlate from '../../../../../utils/fileListPlate/FileListPlate';



const EditFiles = ({ theme }) => {
    const dispatch = useDispatch()
    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(postFile(theme._id, file)))
    }
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3 bg-white'>
                <Form.Group controlId="Add files">
                    <Form.Label>Добавить файлы для обучения</Form.Label>
                    <Form.Control type="file" multiple className='mb-3' onChange={fileUploadHandler} />
                    <div className='d-flex flex-wrap'>
                        <FileListPlate theme={theme} changeable />
                    </div>
                </Form.Group>
            </Form>
        </>
    );
};

export default EditFiles;