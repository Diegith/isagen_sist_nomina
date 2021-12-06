import React, {useState, Fragment} from 'react';
import { Table } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function Users()
{  
const users =[
    {
        id: 1,
        names: "Diego",
        lastNames: "Albarracin",
        nPhone: 1234,
        nIdent: 4321,
        userName: "DiegoA",
        password: 4321,
        dateAdmission: "05/11/20",
        typeUser: "Usuario Nomina",
        state: "Inactivo"
    },
    {
        id: 2,
        names: "Miguel",
        lastNames: "Gutie",
        nPhone: 4879,
        nIdent: 9784,
        userName: "JorgeC",
        password: 9784,
        dateAdmission: "05/01/21",
        typeUser: "Usuario Empleado",
        state: "Inactivo"
    },
    {
        id: 3,
        names: "Lupe",
        lastNames: "Casas",
        nPhone: 6879,
        nIdent: 9786,
        userName: "LupeC",
        password: 9786,
        dateAdmission: "19/12/20",
        typeUser: "Usuario Empleado",
        state: "Activo"
    },
    {
        id: 4,
        names: "Angela",
        lastNames: "Mendoza",
        nPhone: 1687,
        nIdent: 7861,
        userName: "AngelaM",
        password: 7861,
        dateAdmission: "01/02/20",
        typeUser: "Administrador",
        state: "Activo"
    },
    {
        id: 5,
        names: "Jhonatan",
        lastNames: "Cañola",
        nPhone: 3572,
        nIdent: 2753,
        userName: "JhonatanC",
        password: 2753,
        dateAdmission: "18/03/21",
        typeUser: "Administrador",
        state: "Activo"
    }];

const [listar_Usuario, setListar_Usuario] = useState(users);

const buscar_Usuario = (evento)=>{
    setListar_Usuario(users.filter(u=> u.names.toLowerCase().includes(evento.target.value.toLowerCase())))

}

    return (
        <Fragment>
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-user-tie"></i> Usuarios</h3>                            
                        </div>
                        <div className='text-end'>             
                            <Link to='crearusuario'>
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
                                <input type="text" name="valor" className="form-control" placeholder="Buscar..." onChange={buscar_Usuario}/>
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
                                            <th scope="col">Nombres y apellidos</th>
                                            <th scope="col">Tipo de ususario</th>
                                            <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    {
                                    listar_Usuario.map(u => <tbody>
                                        <tr> 
                                            <td className="text-md-center" key={u.names}>
                                                {u.names} {u.lastNames}                         
                                            </td>
                                            <td className="text-md-center" key={u.typeUser}>
                                                {u.typeUser}                               
                                            </td>
                                            <td className="text-md-center" key={u.state}>
                                                {u.state}                                                             
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