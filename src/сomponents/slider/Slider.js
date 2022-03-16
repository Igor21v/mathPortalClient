import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../../pictures/themes/1.jpg"
import slide2 from "../../pictures/themes/2.jpg"
import slide3 from "../../pictures/themes/3.jpg"

export default function Slader() {
    return (
        <Carousel >
            <Carousel.Item  style={{"height" : "90vh"}}  >
                <img
                className='d-block w-100'
                src={slide1}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Модуль числа и его свойста</h3>
                    <p>...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{"height" : "90vh"}}  >
                <img
                className='d-block w-100'
                src={slide2}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Понятие числа</h3>
                    <p>...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{"height" : "90vh"}} >
                <img
                className='d-block w-100'
                src={slide3}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Некоторые алгебраические функции и их графики</h3>
                    <p>Линейная функция</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}