import React from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { API_URL } from "../../../../../config";

const EditImage = (theme) => {
    const picturePath = theme.hasPicture ?
        (API_URL + "themes/themePicture/" + theme._id + ".jpg") :
        (API_URL + "themes/themePicture/1.jpg")
    return (
        <Form className='border p-3 rounded-3 mb-3 '>
            <Row>
                <Col xs='auto'>
                    <Card style={{ width: '16rem' }} className="mb-3 ">
                        <Card.Img variant="top" src={picturePath} />
                    </Card>
                </Col>
                <Col xs={4}>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Выберете изображение темы</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button>Установить стандартное изображение</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default EditImage;