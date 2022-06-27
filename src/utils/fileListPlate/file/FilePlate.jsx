import React from 'react';
import icon_pdf from '../../../assets/img/pdf.svg';
import icon_basket from '../../../assets/img/basket.svg';
import { API_URL } from '../../../config';
import './filePlate.css'
import { useDispatch } from 'react-redux';
import { deleteThemeFile } from '../../../actions/theme';

const File = (props) => {
    const dispatch = useDispatch()
    const delThemeFile = e => {
        e.preventDefault()
        dispatch(deleteThemeFile(props.themeId, props.file))
    }
    

    return (
        <a className='file-plate' href={ API_URL + 'themes/' + props.themeId + '/' + props.file}>
            {props.changeable && <img src={icon_basket} alt="" className='file-plate__basket' onClick={delThemeFile}/> }  
            <img src={icon_pdf} alt="" />
            <span> {props.file} </span>
        </a>
    );
};

export default File;