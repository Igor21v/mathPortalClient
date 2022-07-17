import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL } from "../../../../../config";
import IconEdit from '../../../../icons/iconEdit/IconEdit';


const Theme = ({ theme }) => {
    const borderRed = theme.isPublic ? '' : 'danger'
    const router = useNavigate()
    const picturePath = API_URL + "themes/themePicture/" + theme.pictureName + ".jpg"
    const userRole = useSelector(state => state.user.currentUser.role)
    return (
        <>
            {/* <Col md="auto" > */}
            <Card style={{ width: '16rem', minHeight: '16rem' }} className="mb-2 shadow-sm" border={borderRed}>
                <Card.Img variant="top" src={picturePath} alt='' onClick={() => router(`/themes/view/${theme._id}`)} style={{ cursor: 'pointer' }} />
                <Card.Body className="d-flex justify-content-between flex-column">
                    <Card.Title>{theme.name}</Card.Title>
                    <Card.Text>{theme.discription}</Card.Text>
                    <div className='d-flex flex-row justify-content-between gap-1'>
                        <Button className='flex-grow-1' onClick={() => router(`/themes/view/${theme._id}`)}>Перейти к изучению</Button>
                        {userRole==='ADMIN' && <IconEdit
                            props={{ref: `/themes/edit/${theme._id}`, 
                            hint: 'Редактировать'}}
                        />}
                    </div>
                </Card.Body>
            </Card>
            {/* </Col> */}
        </>

    );
};

export default Theme;