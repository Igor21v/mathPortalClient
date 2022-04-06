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
import { Home } from '../pages/home/Home';
import { useDispatch} from "react-redux";
import { auth } from "../../actions/user";
import './app.scss';
import EditTheme from '../pages/themes/editTheme/EditTheme';
import VeiwTheme from '../pages/themes/viewTheme/ViewTheme';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  },[])
  return (
    <>
      <Router>
        <Navibar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/themes" element={<Themes />} />
          <Route exact path="/themes/edit/:id" element={<EditTheme />} />
          <Route exact path="/themes/view/:id" element={<VeiwTheme />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to ="/themes" />}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;

