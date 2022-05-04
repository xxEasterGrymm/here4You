import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Landing from './components/landing/landing'
import Registration from './components/registration/registration'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function App() {
  return (
    <div className='app'>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App