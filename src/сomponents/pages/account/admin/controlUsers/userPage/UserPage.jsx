import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getListThemes } from '../../../../../../actions/theme';
import { getUserExtend } from '../../../../../../actions/user';
import { setUserExtend } from '../../../../../../reducers/userReducer';
import DropdownFilter from '../../../../../../utils/dropdownFilter/DropdownFilter';
import FileList from '../../../../../../utils/fileList/FileList';
import IconEdit from '../../../../../icons/iconEdit/IconEdit';

const UserPage = () => {

    const param = useParams()
    const userList = useSelector(state => state.user.userList)
    const user = (userList != '') && userList.find(user => user._id === param.id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserExtend(param.id))
        dispatch(getListThemes('onlyPublic',''))
        return () => {
            dispatch(setUserExtend({}))
        }
    }, [])
    const themes = useSelector(state => state.themes.listThemes)
    console.log(themes)
    const userExtend = useSelector(state => state.user.userExtend)
    const dropDownListGen = [
        { name: 'Общие', eventKey: '1' },
    ]
    const dropDownListPriv = themes.map (theme => {
        return {name: theme.name,
        eventKey: theme._id}
    })

return (
    <>
        <h3 style={{ textAlign: 'center' }}>
            Страничка ученика: {user?.surname} {user?.name}
            &#160;
            <IconEdit props={{ ref: `/account/controlUser/userEdit/${user._id}`, hint: 'Редактировать данные или удалить пользователя', position: 'bottom' }} />
        </h3>
        <Card className='p-3 mt-3' >
            <div  className='text-center d-flex justify-content-center align-items-center' >
                <h4>Файлы</h4>
                &#160; &#160;
                <div >
                    <DropdownFilter general={dropDownListGen} private={dropDownListPriv} />
                </div>
            </div>
            <FileList files={userExtend.files} userId={param.id} />

        </Card><Card className='p-3 mt-3'>
            <h4 style={{ textAlign: 'center' }}> Сообщения</h4>


        </Card>

    </>
);
};

export default UserPage;