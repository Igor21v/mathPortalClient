import React, { useEffect } from 'react';
import { setProcessStatus } from '../../reducers/appReducer';
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';

const ProcState = ({procState}) => {
    const processStatus = useSelector(state => state.app.processStatus[procState.index])
    const router = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProcessStatus({index: 0, state: ''}))
    }, [])
    let content = ''
    let className = ''
    let content2 = ''
    switch (processStatus) {
        case 'Processing':
            content = procState.state[0]
            className = 'text-info'
            break;
        case 'Success':
            content = procState.state[1]
            className = 'text-success'
            content2 = procState.ref?.text
            break;
        case 'Error' :
            content = procState.state[2]
            className = 'text-danger'
            break;
        default:
            content = ''
            break;
    } 
    return (
        <>
            <span className={className}>{content} </span>
            {procState.ref && <span className='text-success text-decoration-underline' onClick={() => router(procState.ref.ref)} style={{cursor: 'pointer'}}>{content2} </span>}
        </>
    );
};

export default ProcState;