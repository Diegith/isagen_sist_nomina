import React, {useState, Fragment} from 'react';
import { Table } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function Reportes()
{  
const reportes =[
    {
        id: 1,
        names: "Diego",
        lastNames: "Albarracin",
        typeUser: "Administrador",
        total: '3.000.000'
    },
    {
        id: 2,
        names: "Miguel",
        lastNames: "Gutierrez",
        typeUser: "Usuario Empleado",
        total: '1.700.000'

    },
    {
        id: 3,
        names: "Martha",
        lastNames: "López",
        typeUser: "Usuario Empleado",
        total: '2.000.000'
    },
    {
        id: 4,
        names: "Angela",
        lastNames: "Orozco",
        typeUser: "Usuario Nomina",
        total: "2.000.000"
    },
    {
        id: 5,
        names: "Andres",
        lastNames: "Castellanos",
        typeUser: "Administrador",
        total: '3.000.000'
    }];

const [listar_Reporte] = useState(reportes);

    return (
        <Fragment>
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-receipt"></i> Reportes</h3>                            
                        </div>
                        <div className='text-end'>             
                            <Link to='/'>
                                <button className='btn btn-primary'>Descargar Reporte</button>        
                            </Link>
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
                        <div className="row mt-md-4 p-2">
                            <div className="col-sm-12 table-responsive">
                                <div className='text-center mt-md-3'>
                                    <h1>Empleados con mas de 1 salario mínimo</h1>
                                </div>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr className="table-dark text-md-center">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombres y apellidos</th>
                                            <th scope="col">Tipo de ususario</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    {
                                    listar_Reporte.map(r => <tbody>
                                        <tr> 
                                            <td className="text-md-center" key={r.id}>
                                                {r.id}
                                            </td>
                                            <td className="text-md-center" key={r.names}>
                                                {r.names} {r.lastNames}                         
                                            </td>
                                            <td className="text-md-center" key={r.typeUser}>
                                                {r.typeUser}                               
                                            </td>
                                            <td className="text-md-center" key={r.total}>
                                                {r.total}                                                             
                                            </td>
                                        </tr>
                                    </tbody>)}
                                </Table>
                            </div> 
                        </div>
                        <div className="row mt-md-4 p-2">
                            <div className="col-sm-12 table-responsive">
                                <div className='text-center mt-md-3'>
                                    <h1>Empleados con menos de 1 salario mínimo</h1>
                                </div>
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr className="table-dark text-md-center">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombres y apellidos</th>
                                            <th scope="col">Tipo de ususario</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    {
                                    listar_Reporte.map(r => <tbody>
                                        <tr> 
                                            <td className="text-md-center" key={r.id}>
                                                {r.id}
                                            </td>
                                            <td className="text-md-center" key={r.names}>
                                                {r.names} {r.lastNames}                         
                                            </td>
                                            <td className="text-md-center" key={r.typeUser}>
                                                {r.typeUser}                               
                                            </td>
                                            <td className="text-md-center" key={r.total}>
                                                {r.total}                                                             
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