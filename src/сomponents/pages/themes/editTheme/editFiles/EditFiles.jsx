import React from 'react';
import { Col, Form } from 'react-bootstrap';
import icon from '../../../../../assets/img/pdf.svg';


const EditFiles = ({theme}) => {
    return (
        <>
            <Form className='border p-3 rounded-3 mb-3'>
                <Form.Group controlId="Добавить файлы для обучения" className="mb-3">
                    <Form.Label>Добавить файлы для обучения</Form.Label>
                    <Form.Control type="file" multiple className='mb-3'/>
                    {theme.files? 
                        <div className='d-flex'>
                        {theme.files.map (file => 
                        <div className=''>
                            <img src={icon} alt="" />
                            <span> {file} </span>
                        </div>
                        )}
                        </div>
                        :
                        <span> Файлов для обучения пока что нет... </span> }
                </Form.Group>
            </Form>
        </>
    );
};

export default EditFiles;