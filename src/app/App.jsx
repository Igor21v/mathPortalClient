import React, { useEffect } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import './bootstrCol.scss';
import './app.css'
import Navibar from '../components/navibar/Navibar';
import Footer from '../components/footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../actions/auth";
import { useSelector } from 'react-redux'
import { adminRoutes, publicRoutes, studentRoutes, loadingRoutes } from './routes';
import ws from './ws';
import { useNonInitialEffect } from '../hooks/useNonInitialEffect';


function App() {
  const user = useSelector(state =>state.user.currentUser)
  const dispatch = useDispatch()
  let socket = useSelector(state=>state.messages.socket)
  let timerReopenSocket

  useEffect(() => {
    dispatch(refresh())
  }, [])

  useNonInitialEffect(() => {
    ws(user, socket, timerReopenSocket)
  }, [user.id])

  const authRoutes = () => {
    console.log('user.role:  ' + user.role)
    switch (user.role) {
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

  return (
    <div className='app'>
      <BrowserRouter>
        <Navibar />
        <Routes>
          {authRoutes()}
          {user.role && publicRoutes.map(({ path, Component }) =>
            <Route exact key={path} path={path} element={Component} />
          )}

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

