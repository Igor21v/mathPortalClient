import React from 'react';
import { useNavigate } from 'react-router-dom';

const IconEdit = ({props}) => {
    const router = useNavigate()
    console.log(JSON.stringify(props))
    return (
        <>
            <img style={{ cursor: 'pointer' }}
                onClick={() => router(props.ref)}
                src="/edit.svg"
                width="36"
                height="36"
                alt=""
                />
        </>
    );
};

export default IconEdit;