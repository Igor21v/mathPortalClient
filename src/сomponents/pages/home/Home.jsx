import React, {useState} from 'react';
import Login from "../../authorization/Login";
import Registration from "../../authorization/Registration";
import { useSelector, useDispatch} from "react-redux";
import './home.css';
import { Col, Container, Row } from 'react-bootstrap';
import Disk from '../../disk/Disk';
import Profile from '../../profile/Profile';
import {showLoader} from "../../../reducers/appReducer";
import {getFiles, searchFiles} from "../../../actions/file";
import avatarLogo from '../../../assets/img/avatar.svg'
import {API_URL} from "../../../config";

export function Home() {

        const isAuth = useSelector(state => state.user.isAuth)
        const currentDir = useSelector(state => state.files.currentDir)
        const currentUser = useSelector(state => state.user.currentUser)
        const dispatch = useDispatch()
        const [searchName, setSearchName] = useState('')
        const [searchTimeout, setSearchTimeout] = useState(false)
        const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatarLogo

        function searchChangeHandler(e) {
                setSearchName(e.target.value)
                if (searchTimeout !== false) {
                    clearTimeout(searchTimeout)
                }
                dispatch(showLoader())
                if(e.target.value !== '') {
                    setSearchTimeout(setTimeout((value) => {
                        dispatch(searchFiles(value));
                    }, 500, e.target.value))
                } else {
                    dispatch(getFiles(currentDir))
                }
            }

        return (

                <> {!isAuth ?

                        <Container>
                                <Row className="justify-content-md-center mb-5">
                                        <Col lg={4} >
                                                <h3 className="authorization_need">Необходима авторизация</h3>
                                                <Login />
                                        </Col>
                                </Row>
                        </Container>
                        :
                        <Container>
                                <Row className="justify-content-md-center mb-5">
                                        <Col lg={8} >
                                                <h5>Счетчик событий useEffect: {" "}
                                                        {localStorage.getItem('useEffectCont')}</h5>
                                                        <img className="navbar__avatar" src={avatar} alt=""/>
                                                        {<Profile />}
                                                <Registration />
                                                <h2>Управление файловой системой проекта</h2>
                                                <input
                                                        value={searchName}
                                                        onChange={e => searchChangeHandler(e)}
                                                        className='navbar__search'
                                                        type="text"
                                                        placeholder="Название файла..." />
                                                {<Disk />}
                                        </Col>
                                </Row>
                        </Container>

                } </>

        );
}