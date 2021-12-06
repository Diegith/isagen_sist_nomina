import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import '../navbar/Navbar.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Home()
{  
    const solicitudes =[
        {
            id: 1,
            date: "15/11/2021",
            typeRequest: "Nómina",
            state: "Revisíon"
        },
        {
            id: 2,
            date: "18/10/2021",
            typeRequest: "Vacaciones",
            state: "Negado"
        },
        {
            id: 3,
            date: "3/09/2021",
            typeRequest: "Certificado laboral",
            state: "Aprobado"
        }];
        
    const [listar_Solicitudes, setListar_Solicitudes] = useState(solicitudes);
  
const buscar_Solicitud = (evento)=>{
    setListar_Solicitudes(solicitudes.filter(s=> s.typeRequest.toLowerCase().includes(evento.target.value.toLowerCase())))

}


const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


    return (
        <Fragment>
            <nav className='navbar'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}
                    />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>                    
                    <li className ='nav-item'>
                        <Link 
                        to='/solicitudes' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Solicitudes
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/certificadolaboral' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Certificado laboral
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/nomina' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Nómina
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/editarperfil' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Editar perfil
                        </Link> 
                    </li>
                </ul>
            </nav>
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-receipt"></i> Solicitudes</h3>                            
                        </div>
                    </Paper>
                </Grid>                  
                <hr/>
                <Grid container spacing={3}>
                  {/* Chart */}
                  <Grid item xs={12} md={8} lg={12}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 'auto',
                      }}
                    >    
                        <form action="">
                            <div className="row mt-md-3">
                                <div className="col-sm-12 col-md-4">
                                    <select className="form-select" name="atributo">                            
                                        <option value="nombresUsuario">ID</option>
                                        <option value="apellidosUsuario">Fecha</option>
                                        <option value="numeroDocumento">Tipo de solicitud</option>
                                        <option value="userName">Estado</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-md-5">
                                    <input type="text" name="valor" className="form-control" placeholder="Buscar..." onChange={buscar_Solicitud}/>
                                </div>
                                <div className="col-sm-12 col-md-3 text-start">
                                    <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> Buscar</button>
                                </div> 
                            </div>
                        </form>    
                        <div className="row mt-md-4 p-2">
                            <div className="col-sm-12 table-responsive">
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo de solicitud</th>
                                            <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    {
                                    listar_Solicitudes.map(s => <tbody>
                                        <tr> 
                                            <td className="text-md-center" key={s.id}>
                                                {s.id}                         
                                            </td>
                                            <td className="text-md-center" key={s.date}>
                                                {s.date}                         
                                            </td>
                                            <td className="text-md-center" key={s.typeRequest}>
                                                {s.typeRequest}                               
                                            </td>
                                            <td className="text-md-center" key={s.state}>
                                                {s.state}                                                             
                                            </td>
                                        </tr>
                                    </tbody>)}
                                </Table>
                            </div> 
                        </div>
                    </Paper>
                  </Grid>     
                </Grid> 
            </Container>                     
        </Fragment>  
    );
}