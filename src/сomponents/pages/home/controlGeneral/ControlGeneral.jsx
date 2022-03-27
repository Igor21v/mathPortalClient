import React, { useState } from 'react';
import Disk from '../../../disk/Disk';
import { useSelector, useDispatch } from "react-redux";
import { showLoader } from "../../../../reducers/appReducer";
import { getFiles, searchFiles } from "../../../../actions/file";


const ControlGeneral = () => {
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()
    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }
    return (
        <>
            <h5>Счетчик событий useEffect: {" "}
                {localStorage.getItem('useEffectCont')}</h5>
            <h2>Управление файловой системой проекта</h2>
            <input
                value={searchName}
                onChange={e => searchChangeHandler(e)}
                className='navbar__search'
                type="text"
                placeholder="Название файла..." />
            <Disk />
        </>
    );
}
    
export default ControlGeneral;