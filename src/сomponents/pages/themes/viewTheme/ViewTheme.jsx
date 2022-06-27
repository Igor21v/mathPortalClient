import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const VeiwTheme = () => {
    const param = useParams()
    return (
        <Container className='text-center mt-3 mb-3'>  
            <h3>Просмотр темы {param.id}</h3>
            <Card className='p-3 mt-3'>
                <h4>Материалы для изучения</h4>
            </Card>
            <Card className='p-3 mt-3'>
                <h4>Комментарии</h4>
            </Card>
        </Container>
    );
};

export default VeiwTheme;