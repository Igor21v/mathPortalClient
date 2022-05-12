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

export function Admin() {
	const userRole = useSelector(state => state.user.currentUser.role)
	const contentPage = useSelector(state => state.app.contentPage)


	const content = () => {
		switch (contentPage) {
			case 'users':
				return <ControlUsers />
			case 'themes':
				return <ControlThemes />
			case 'settings':
				return <ControlGeneral />
			default:
				return (<h1>Err</h1>)
		}
	}


	return (
		<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
			<Row className="gap-3">
				<Col lg={2}>
					<LeftMenu />
				</Col>
				<Col>
					{/* {content()} */}
					<Routes>
						<Route path={`11`} element={<ControlThemes/>}/>
						<Route path={`*`} element={<ControlGeneral/>}/>
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}