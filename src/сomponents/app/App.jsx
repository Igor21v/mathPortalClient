import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from '../navibar/Navibar';
import Footer from '../footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Themes } from '../pages/themes/Themes';
import { About } from '../pages/about/About';
import { Admin } from '../pages/account/admin/Admin';
import { useDispatch } from "react-redux";
import { auth } from "../../actions/user";
import './app.scss';
import EditTheme from '../pages/themes/editTheme/EditTheme';
import VeiwTheme from '../pages/themes/viewTheme/ViewTheme';
import { useSelector } from 'react-redux'
import { adminRoutes, studentRoutes } from '../../routes';


function App() {
  const userRole = useSelector(state => state.user.currentUser.role)
  const dispatch = useDispatch()
  const route = () => {
    switch (userRole) {
      case 'admin':
        return (
          adminRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />)
        )
      case 'student':
        return (
          studentRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />)
        )


    }
  }

  useEffect(() => {
    dispatch(auth())
  }, [])
  return (
    <>
      <Router>
        <Navibar />
        <Routes>
          {route()}
          {/* <Route path="/" element={<Admin />} />
          <Route exact path="/themes" element={<Themes />} />
          <Route exact path="/themes/edit/:id" element={<EditTheme />} />
          <Route exact path="/themes/view/:id" element={<VeiwTheme />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/themes" />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

