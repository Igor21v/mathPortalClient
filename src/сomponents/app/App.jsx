import React, { useEffect } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import './bootstrCol.scss';
import './app.css'
import Navibar from '../navibar/Navibar';
import Footer from '../footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../../actions/auth";
import { useSelector } from 'react-redux'
import { adminRoutes, publicRoutes, studentRoutes, loadingRoutes } from '../../routes';


function App() {
  const userRole = useSelector(state => state.user.currentUser.role)
  const dispatch = useDispatch()
  console.log('Role' + userRole)
  const authRoutes = () => {
    console.log('eee ' + userRole)
    switch (userRole) {
      case 'ADMIN':
        return (
          adminRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />)
        )
      case 'STUDENT':
        return (
          studentRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />)
        )
      case undefined:
        return (
          loadingRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />)
        )
    }
  }
  useEffect(() => {
    dispatch(refresh())
  }, [])
  return (
    <div className='app'>
      <BrowserRouter>
        <Navibar />
        <Routes>
          {authRoutes()}
          {userRole && publicRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />
          )}

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

