import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postUserFile } from '../../../../actions/file';
import { getListThemes } from '../../../../actions/theme';
import { getUserExtend } from '../../../../actions/user';
import { setUserExtend } from '../../../../reducers/userReducer';
import DropdownFilter from '../../../../utils/dropdownFilter/DropdownFilter';
import FileList from '../../../../utils/fileList/FileList';
import ProcState from '../../../../utils/procState/ProcState';
import Messeges from './messeges/Messeges';
import UserFiles from './userFiles/UserFiles';

const UserPage = () => {

    const dispatch = useDispatch()
    const [dropdown, setDropdown] = useState('General')
    useEffect(() => {
        dispatch(getListThemes('onlyPublic', ''))
    }, [])
    const themes = useSelector(state => state.themes.listThemes)
    const dropDownListGen = [
        { name: 'Общие', eventKey: 'General' },
    ]
    const dropDownListPriv = themes.map(theme => {
        return {
            name: theme.name,
            eventKey: theme._id
        }
    })
    let dropDownListAll = dropDownListGen.concat(dropDownListPriv)
    console.log('lll' + JSON.stringify(dropDownListAll))
    const activDropdown = dropDownListAll.find(item => item.eventKey === dropdown)
    console.log('ttt' + JSON.stringify(activDropdown))


    return (
        <>
            <div className='d-flex flex-wrap justify-content-between align-items-end ps-3'>
                <h4 className='m-0'>
                    {activDropdown.name}
                </h4>
                <div>
                    <DropdownFilter general={dropDownListGen} private={dropDownListPriv} function={setDropdown} toggleText='Выберите тему' activeItem={dropdown} />
                </div>
            </div>

            <UserFiles dropdown={dropdown}/>

            <Messeges dropdown={dropdown}/>

        </>
    );
};

export default UserPage;