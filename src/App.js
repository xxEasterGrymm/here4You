import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Registration from './components/registration/registration';
import Home from './components/home/home';
import Choose from './components/choose/choose';
import Chatroom from './components/chatroom/chatroom';
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
          <Route path="/choose" element={<Choose />}></Route>
          <Route path="/chatroom" element={<Chatroom />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App