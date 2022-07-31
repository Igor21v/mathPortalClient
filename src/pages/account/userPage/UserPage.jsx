import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListThemes } from '../../../actions/theme';
import DropdownFilter from '../../../components/dropdownFilter/DropdownFilter';
import Messeges from './messeges/Messeges';
import UserFiles from './userFiles/UserFiles';

const UserPage = () => {
    return (
        <>
            <UserFiles />
            <Messeges />
        </>
    );
};

export default UserPage;