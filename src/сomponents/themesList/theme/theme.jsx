import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { API_URL } from "../../../config";


const Theme = ({ theme }) => {
    const borderRed = theme.isPublic ? '' : 'danger'
    const picturePath = theme.hasPicture ?
        (API_URL + "themes/themePicture/" + theme._id + ".jpg") :
        (API_URL + "themes/themePicture/1.jpg")
    return (
        <Col md="auto" >
            <Card style={{ width: '16rem' }} className="mb-3" border={borderRed}>
                <Card.Img variant="top" src={picturePath} />
                <Card.Body>
                    <Card.Title>{theme.name}</Card.Title>
                    <Card.Text>{theme.discription}</Card.Text>
                    <Button>Перейти к изучению</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Theme;