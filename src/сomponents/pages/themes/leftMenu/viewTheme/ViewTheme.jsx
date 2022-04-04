import React from 'react';
import { useParams } from 'react-router-dom';

const VeiwTheme = () => {
    const param = useParams()
    return (
        <>
            <h1>Просмотр темы {param.id}</h1>
        </>
    );
};

export default VeiwTheme;