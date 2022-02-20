import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../../pictures/themes/1.jpg"
import slide2 from "../../pictures/themes/2.jpg"
import slide3 from "../../pictures/themes/3.jpg"
import slide4 from "../../pictures/themes/4.jpg"

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
                    <h3>Игорь</h3>
                    <p>Клевый чувак</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{"height" : "90vh"}}  >
                <img
                className='d-block w-100'
                src={slide2}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Танюха</h3>
                    <p>Клевая чувиха</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{"height" : "90vh"}} >
                <img
                className='d-block w-100'
                src={slide3}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Оля</h3>
                    <p>Крутая девченка</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  style={{"height" : "90vh"}} >
                <img
                className='d-block w-100'
                src={slide4}
                alt="Здесь должен быть слайд"
                />
                <Carousel.Caption>
                    <h3>Тасимба</h3>
                    <p>Супер кошка</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
}