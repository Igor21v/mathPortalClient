import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import EditText from './editText/EditText';


const EditTheme = () => {
   
    return (
        <>
            <Container className='mb-3 mt-3'>
                <EditText/>
                <Form className='border p-3 rounded-3'>
                    <Form.Group controlId="Добавить файлы для обучения" className="mb-3">
                        <Form.Label>Добавить файлы для обучения</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                </Form>

            </Container>
        </>
    );
};

export default EditTheme;