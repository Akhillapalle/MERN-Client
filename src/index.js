import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/register';
import Home from './components/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar/>
      <Home/>
      <Routes>   
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
      </Routes>
    </Router>
  </div>
);

