import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../../../../config";


const Theme = ({ theme }) => {
    const borderRed = theme.isPublic ? '' : 'danger'
    const router = useNavigate()
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
                    <Button onClick={() => router(`/themes/view/${theme._id}`)}>Перейти к изучению</Button>
                    <img style={{position:'absolute', right:'8px', cursor: 'pointer'}}
                        onClick={() => router(`/themes/edit/${theme._id}`)}
                        src="/edit.svg"
                        width="36"
                        height="36"
                        alt=""
                    />
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Theme;