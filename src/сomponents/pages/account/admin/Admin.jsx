import React from 'react';
import Login from "../../../authorization/Login";
import { useSelector } from "react-redux";
import './admin.css';
import { Col, Container, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';
import ControlUsers from './controlUsers/ControlUsers.jsx';
import ControlGeneral from './controlGeneral/ControlGeneral';
import ControlThemes from './controlThemes/ControlThemes';
import { Route, Routes } from 'react-router-dom';
import UserPage from './controlUsers/userPage/UserPage';

export function Admin() {
	const userRole = useSelector(state => state.user.currentUser.role)


	return (
		<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
			<Row className="gap-3 flex-nowrap">
				<Col lg={2} className='p-0 m-0'>
					<LeftMenu />
				</Col>
				<Col className='p-0'>
					<Routes>
						<Route path={`*`} element={<ControlUsers/>}/>
						<Route path={`themes`} element={<ControlThemes/>}/>
						<Route path={`general`} element={<ControlGeneral/>}/>
						<Route path={`userPage/:id`} element={<UserPage/>}/>
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}