import React from 'react';
import { Button, Card, Col} from 'react-bootstrap';
import slide1 from "../../../pictures/themes/1.jpg"

const Theme = ({theme}) => {
    console.log(theme)
    return (
        
            <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide1} />
                            <Card.Body>
                                <Card.Title>{theme.name}</Card.Title>
                                <Card.Text>
                                    Основные законы арифметики и алгебры
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
            </Col>
        
    );
};

export default Theme;