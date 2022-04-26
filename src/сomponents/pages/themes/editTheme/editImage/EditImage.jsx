import React from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePicture, postPicture } from '../../../../../actions/theme';
import { API_URL } from "../../../../../config";

const EditImage = ({theme}) => {
    const picturePath = API_URL + "themes/themePicture/" + theme.pictureName + ".jpg"
    const dispatch = useDispatch()
    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(postPicture(theme, file))
    }
    return (
        <Form className='border p-3 rounded-3 mb-3 '>
            <Row>
                <Col  xs='auto'>
                    <Card style={{ width: '16rem' }} className="mb-3 ">
                        <Card.Img variant="top" src={`${picturePath}?${Date.now()}`} alt=''/>
                    </Card>
                </Col>
                <Col >
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Выберете изображение темы</Form.Label>
                        <Form.Control type="file" accept="image/*" onChange={e => changeHandler(e)} />
                    </Form.Group>
                    <p>или</p>
                    <Button onClick={() => dispatch(deletePicture(theme))}>Установить стандартное изображение</Button>
                    <p>PP {picturePath}</p>
                </Col>
            </Row>
        </Form>
    );
};

export default EditImage;