import React from 'react';
import { Form } from 'react-bootstrap';


const EditFiles = () => {
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3'>
                <Form.Group controlId="Добавить файлы для обучения" className="mb-3">
                    <Form.Label>Добавить файлы для обучения</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
            </Form>
        </>
    );
};

export default EditFiles;