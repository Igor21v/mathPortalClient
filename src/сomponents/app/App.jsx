import React, { useEffect } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import './bootstrCol.scss';
import './colors.css'
import Navibar from '../navibar/Navibar';
import Footer from '../footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../actions/user";
import { useSelector } from 'react-redux'
import { adminRoutes, publicRoutes, studentRoutes } from '../../routes';


function App() {
  const userRole = useSelector(state => state.user.currentUser.role)
  const dispatch = useDispatch()
  console.log('Role' + userRole)
  const authRoutes = () => {
    switch (userRole) {
      case 'ADMIN':
        return (
          adminRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={Component} />)
        )
      case 'STUDENT':
        return (
          studentRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />)
        )
    }
  }

  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <div className='app'>
      <BrowserRouter>
        <Navibar />
        <Routes>
          {authRoutes()}
          {publicRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

