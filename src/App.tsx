import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './Styles/App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './views/Services';
import Products from './views/Products';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import {selectUser } from './features/userSlice';
import {useSelector} from "react-redux"


function App() {
  const user = useSelector(selectUser)
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={user ? <Logout/> : <Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
