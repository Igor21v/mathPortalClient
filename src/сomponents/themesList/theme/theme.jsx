import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import {API_URL} from "../../../config";


const Theme = ({ theme }) => {
    return (
        <Col md="auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {API_URL + "themes/themePicture/" + theme._id + ".jpg"} />
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