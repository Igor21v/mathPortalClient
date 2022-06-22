import React, { useEffect, useState } from 'react';
import { Card, Form } from 'react-bootstrap';
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
    const [dropdown, setDropdown] = useState('General')
    console.log(dropdown)
    useEffect(() => {
        console.log(param.id)
        dispatch(getUserExtend(param.id, dropdown))
        return () => {
            dispatch(setUserExtend({}))
        }
    }, [dropdown])
    useEffect(() => {
        dispatch(getListThemes('onlyPublic', ''))
    }, [])
    const themes = useSelector(state => state.themes.listThemes)
    console.log(themes)
    const userExtend = useSelector(state => state.user.userExtend)
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
            <h3 style={{ textAlign: 'center' }}>
                Страничка ученика: {user?.surname} {user?.name}
                &#160;
                <IconEdit props={{ ref: `/account/controlUser/userEdit/${user._id}`, hint: 'Редактировать данные или удалить пользователя', position: 'bottom' }} />
            </h3>
            <div className='d-flex flex-wrap justify-content-between align-items-end ps-3'>
                <h4 className='m-0'>
                    {activDropdown.name}
                </h4>
                <div>
                    <DropdownFilter general={dropDownListGen} private={dropDownListPriv} function={setDropdown} toggleText='Выберите тему' activeItem={dropdown} />
                </div>
            </div>

            <Card className='p-3 mt-3' >
                <h4 className='text-center'>Файлы</h4>
                <FileList files={userExtend.files} userId={param.id} folder={dropdown} />
                <Form className='border p-3 rounded-3 mt-4'>
                    <Form.Group controlId="Add files">
                        <Form.Label>Добавить файлы</Form.Label>
                        <Form.Control type="file" multiple className='mb-3' onChange={() => console.log('add files')} />
                    </Form.Group>
                </Form>
            </Card>

            <Card className='p-3 mt-3'>
                <h4 style={{ textAlign: 'center' }}> Сообщения</h4>
            </Card>

        </>
    );
};

export default UserPage;