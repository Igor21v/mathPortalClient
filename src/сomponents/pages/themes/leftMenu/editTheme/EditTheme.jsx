import React from 'react';
import { useParams } from 'react-router-dom';

const EditTheme = () => {
    const param = useParams()
    return (
        <div>
            <h1>Редактирование темы {param.id}</h1>
        </div>
    );
};

export default EditTheme;