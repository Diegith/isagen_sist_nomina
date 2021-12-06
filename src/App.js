import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import Reportes from './components/pages/Reportes';
import Nomina from './components/pages/Nomina';
import UserRegForm from './components/forms/UserRegForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/usuarios' element={<Users/>} />
        <Route path='/reportes' element={<Reportes/>} />
        <Route path='/nomina' element={<Nomina/>} />
        <Route path='usuarios/crearusuario' element={<UserRegForm />} />
      </Routes>
    </Router>   
  );
}

export default App;
