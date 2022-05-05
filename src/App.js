import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/home/home';
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App