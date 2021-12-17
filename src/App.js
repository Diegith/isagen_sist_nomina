import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AllUsers from './components/pages/AllUsers';
import Reportes from './components/pages/Reportes';
import NominaForm from './components/forms/NominaForm';
import CertificadoLaboralForm from './components/forms/CertificadoLaboralForm';
import NotFound from './components/pages/NoFound';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import AllHolidays from './components/pages/AllHolidays';
import AddHoliday  from './components/pages/AddHoliday';
import EditHoliday  from './components/pages/EditHoliday';
import AllPermisos from './components/pages/AllPermisos';
import EditPermiso from './components/pages/EditPermiso';
import AddPermiso from './components/pages/AddPermiso';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/permisos' element={<AllPermisos /> } />
        <Route path='/vacaciones' element={<AllHolidays /> } />
        <Route path='/usuarios' element={<AllUsers />} />
        <Route path='/reportes' element={<Reportes/>} />
        <Route path='/nomina' element={<NominaForm/>} />
        <Route path='usuarios/crear' element={<AddUser /> } />
        <Route path='/usuarios/editar/:id' element={<EditUser /> } />        
        <Route path='/vacaciones/solicitar' element={<AddHoliday />} />
        <Route path='/vacaciones/editar/:id' element={<EditHoliday /> } />        
        <Route path='/permisos/crear' element={<AddPermiso /> } />
        <Route path='/permisos/editar/:id' element={<EditPermiso /> } />        
        <Route path='certificadolaboral' element={<CertificadoLaboralForm />} />
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </Router>   
  );
}

export default App;
