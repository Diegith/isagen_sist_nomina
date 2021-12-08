import React, {useState, Fragment} from 'react';
import { Table } from 'react-bootstrap';
import '../navbar/Navbar.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function Solicitudes()
{  
    const solicitudes = [
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

    return (
        <Fragment>
            <div className='home'>            
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
                                        <tr className="text-md-center" >
                                            <th scope="col">ID</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo de solicitud</th>
                                            <th scope="col">Estado</th>
                                        </tr>
                                    </thead>
                                    {
                                    listar_Solicitudes.map(s => <tbody>
                                        <tr className="text-md-center"> 
                                            <td key={s.id}>
                                                {s.id}                         
                                            </td>
                                            <td key={s.date}>
                                                {s.date}                         
                                            </td>
                                            <td key={s.typeRequest}>
                                                {s.typeRequest}                               
                                            </td>
                                            <td key={s.state}>
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
            </div>                    
        </Fragment>  
    );
}