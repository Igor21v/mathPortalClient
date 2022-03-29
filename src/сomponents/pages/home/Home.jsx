import React from 'react';
import Login from "../../authorization/Login";
import { useSelector } from "react-redux";
import './home.css';
import { Col, Container, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';
import ControlUsers from './controlUsers/ControlUsers.jsx';
import ControlGeneral from './controlGeneral/ControlGeneral';
import ControlThemes from './controlThemes/ControlThemes';

export function Home() {
	const isAuth = useSelector(state => state.user.isAuth)
	const contentPage = useSelector(state => state.app.contentPage)

	const content = () => {
		switch (contentPage) {
			case 'users':
				return <ControlUsers/>
			case 'themes':
				return <ControlThemes/>
			case 'settings':
				return  <ControlGeneral/>	
			default:
				return (<h1>Err</h1>)
		}
	}

	return (

		<> 
		{!isAuth ?
			<Container className = "d-flex justify-content-center mb-5 ">

				<Col lg={4} >
					<h3 className="authorization_need">Необходима авторизация</h3>
					<Login />
				</Col>

			</Container>
			:
			<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
				<Row className="gap-3">
					<Col lg={2}>
						<LeftMenu />
					</Col>
					<Col>
						{content()}
					</Col>
				</Row>
			</Container>

		} </>

	);
}