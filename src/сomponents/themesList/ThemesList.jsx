import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import slide1 from "../../pictures/themes/1.jpg"
import slide2 from "../../pictures/themes/2.jpg"
import slide3 from "../../pictures/themes/3.jpg"
import slide4 from "../../pictures/themes/4.jpg"

const ThemesList = () => {

    return (
        <div>
            <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide1} />
                            <Card.Body>
                                <Card.Title>Основные законы</Card.Title>
                                <Card.Text>
                                    Основные законы арифметики и алгебры
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide2} />
                            <Card.Body>
                                <Card.Title>Теория множеств</Card.Title>
                                <Card.Text>
                                    Основные законы теории множеств
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide3} />
                            <Card.Body>
                                <Card.Title>Тема1</Card.Title>
                                <Card.Text>
                                    Краткое содержание темы 1
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide4} />
                            <Card.Body>
                                <Card.Title>Тема1</Card.Title>
                                <Card.Text>
                                    Краткое содержание темы 1
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={slide4} />
                            <Card.Body>
                                <Card.Title>Тема1</Card.Title>
                                <Card.Text>
                                    Краткое содержание темы 1
                                </Card.Text>
                                <Button>Перейти к изучению</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ThemesList;