import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Users from './components/pages/Users';
import Reportes from './components/pages/Reportes';
import NominaForm from './components/forms/NominaForm';
import UserRegForm from './components/forms/UserRegForm';
import UserEditForm from './components/forms/UserEditForm';
import CertificadoLaboralForm from './components/forms/CertificadoLaboralForm';
import Permisos from './components/pages/Permisos';
import Solicitudes from './components/pages/Solicitudes';
import Vacaciones from './components/pages/Vacaciones';
import Footer from './components/navbar/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/permisos' element={<Permisos />} />
        <Route path='/vacaciones' element={<Vacaciones />} />
        <Route path='/usuarios' element={<Users />} />
        <Route path='/reportes' element={<Reportes/>} />
        <Route path='/nomina' element={<NominaForm/>} />
        <Route path='usuarios/crear' element={<UserRegForm />} />
        <Route path='editarusuario' element={<UserEditForm />} />
        <Route path='certificadolaboral' element={<CertificadoLaboralForm />} />
        <Route path='solicitudes' element={<Solicitudes /> } />
        
      </Routes>
      <Footer />
    </Router>   
  );
}

export default App;
