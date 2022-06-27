import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '../../../../actions/theme';
import { setTheme } from '../../../../reducers/themeReducer';
import FileListPlate from '../../../../utils/fileListPlate/FileListPlate';

const VeiwTheme = () => {
    const param = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTheme(param.id))
        return (dispatch(setTheme('')))
    }, [])
    const theme = useSelector(state => state.themes.theme)
    console.log(theme)
    return (
        <Container className='text-center mt-3 mb-3'>
            <h3>{theme.name}</h3>
            <Card className='p-3 mt-3'>
                <h4>Материалы для изучения</h4>
                    <FileListPlate theme={theme}/>
            </Card>
            <Card className='p-3 mt-3'>
                <h4>Комментарии</h4>
            </Card>
        </Container>
    );
};

export default VeiwTheme;