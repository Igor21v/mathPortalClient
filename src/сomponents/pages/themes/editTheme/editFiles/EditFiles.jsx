import React from 'react';
import { Col, Form } from 'react-bootstrap';
import FileList from './fileList/FileList';



const EditFiles = ({ theme }) => {
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3'>
                <Form.Group controlId="Add files">
                    <Form.Label>Добавить файлы для обучения</Form.Label>
                    <Form.Control type="file" multiple className='mb-3' />
                    {theme.files ?
                        <FileList theme={theme}/>
                        :
                        <span> Файлов для обучения пока что нет... </span>}
                </Form.Group>
            </Form>
        </>
    );
};

export default EditFiles;