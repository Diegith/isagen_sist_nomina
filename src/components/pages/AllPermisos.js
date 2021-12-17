import React, {useState, useEffect, Fragment} from 'react';
import { getPermisos, deletePermiso } from "../../service/API";
import { Table } from 'react-bootstrap';
import '../navbar/Navbar.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const AllPermisos = () => { 

    const [permisos, setPermisos] = useState([]);

    useEffect(() => {
        getAllPermisos();
        // eslint-disable-next-line
    }, [])

    const getAllPermisos = async () => {
        const res = await getPermisos();
        console.log(res);
        setPermisos(res.data);
    }

    const deletePermisoData = async(id) => {
        await deletePermiso(id);
        getAllPermisos();
    }   
    return (
        <Fragment>
            <div className='home'>
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-receipt"></i>    Permisos</h3>                            
                        </div>
                        <div className='text-end'>             
                            <Link to='crear'>
                                <button className='btn btn-primary'>Nuevo permiso</button>        
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
                                    <input type="text" name="valor" className="form-control" placeholder="Buscar..."/>
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
                                        <tr className="text-md-center">
                                            <th scope="col">ID</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo de solicitud</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    {
                                    permisos.map(s => <tbody>
                                        <tr className="text-md-center"> 
                                            <td key={s.id}>
                                                {s.id}                         
                                            </td>
                                            <td key={s.date}>
                                                {s.date}                         
                                            </td>
                                            <td key={s.typePermission}>
                                                {s.typePermission}                               
                                            </td>
                                            <td key={s.state}>
                                                {s.state}                                                             
                                            </td>
                                            <td key="acciones">
                                                <Link to={`/permisos/editar/${s.id}`}>
                                                    <button className='btn btn-primary' style={{marginRight: 10}}>Editar</button>
                                                </Link>                                                
                                                <button className='btn btn-secondary' onClick={() => deletePermisoData(s.id)}>Eliminar</button>                                                           
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
            </div>                    
        </Fragment>  
    );
}

export default AllPermisos;