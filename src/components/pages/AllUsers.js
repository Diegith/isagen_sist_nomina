import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../service/API";
import { Table } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async() => {
        const res = await getUsers();
        console.log(res);
        setUsers(res.data);
    }

    const deleteUserData = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return(
        <>
        <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-user-tie"></i> Usuarios</h3>                            
                        </div>
                        <div className='text-end'>             
                            <Link to='crear'>
                                <button className='btn btn-primary'>Crear usuario</button>        
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
                                    <option value="nombresUsuario">Nombre</option>
                                    <option value="apellidosUsuario">Apellido</option>
                                    <option value="numeroDocumento">Documento</option>
                                    <option value="userName">Usuario</option>
                                </select>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <input type="text" name="valor" className="form-control" placeholder="Buscar..." />
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
                                        <tr className="table-dark text-md-center">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nombres y apellidos</th>
                                            <th scope="col">Tipo de ususario</th>
                                            <th scope="col">Estado</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    {
                                    users.map(u => <tbody>
                                        <tr className="text-md-center"> 
                                            <td key={u.id}>
                                                {u.id}                               
                                            </td>
                                            <td key={u.names}>
                                                {u.names} {u.lastNames}                         
                                            </td>
                                            <td key={u.typeUser}>
                                                {u.typeUser}                               
                                            </td>
                                            <td key={u.state}>
                                                {u.state}                                                             
                                            </td>
                                            <td key="acciones">
                                                <Link to={`/usuarios/editar/${u.id}`}>
                                                    <button className='btn btn-primary' style={{marginRight: 10}}>Editar</button>
                                                </Link>                                                
                                                <button className='btn btn-secondary' onClick={() => deleteUserData(u.id)}>Eliminar</button>                                                           
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
        </>
    )
}

export default AllUsers;