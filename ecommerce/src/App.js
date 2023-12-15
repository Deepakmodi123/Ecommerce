import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Header from './Pages/Header';
import Home from './Pages/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Home' element={<Home/>}/>

      </Routes>
    </Router>
    
  );
}

export default App;
