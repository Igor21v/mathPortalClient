import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from 'react-bootstrap';
import LeftMenu from './leftMenu/LeftMenu';
import ControlUsersRout from './controlUsers/ControlUsersRout.js';
import ControlGeneral from './controlGeneral/ControlGeneral';
import ControlThemes from './controlThemes/ControlThemes';
import { Route, Routes } from 'react-router-dom';
import UserPage from './controlUsers/userPage/UserPage';
import UserEdit from './controlUsers/userEdit/UserEdit';

export function Admin() {

	return (
		<Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
			<Row className="gap-3 flex-nowrap">
				<Col lg={2} className='p-0 m-0'>
					<LeftMenu />
				</Col>
				<Col lg={10} className='p-0'>
					<Routes>
						<Route path={`controlUser/*`} element={<ControlUsersRout />} />
						<Route path={`themes`} element={<ControlThemes />} />
						<Route path={`general`} element={<ControlGeneral />} />
						{/* <Route path={`*`} element={<ControlUsersRout />} /> */}
					</Routes>
				</Col>
			</Row>
		</Container>
	);
}