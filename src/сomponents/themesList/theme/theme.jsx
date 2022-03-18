import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const Theme = ({ theme }) => {
    console.log(theme)
    return (

        <Col md="auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={theme.image} />
                <Card.Body>
                    {console.log(theme.name)}
                    <Card.Title>{theme.name}</Card.Title>
                    <Card.Text>{theme.discription}</Card.Text>
                    <Button>Перейти к изучению</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Theme;