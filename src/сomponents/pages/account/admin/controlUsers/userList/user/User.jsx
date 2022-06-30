import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const router = useNavigate()
    return (
        <>
            <tr style={{ cursor: 'pointer' }} onClick={() => router(`/account/controlUser/userView/${user._id}`)}>
                <td> {user.surname} </td>
                <td> {user.name} </td>
                <td> +7{user.phon} </td>
            </tr>
        </>
    );
};

export default User;