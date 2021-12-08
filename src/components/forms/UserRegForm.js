import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const initialForm = {
  id:null,
  name:"",
  lastName: "",
  nPhone: 0,
  nIdent: 0,
  userName: "",
  password: "",
  dateAdmission: "",
  typeUser: "",
  state: ""
}

const UserRegForm = () => {

    const [form, setForm] = useState({initialForm})

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
      
    }

    const handleReset = (e) => {
      
    }

    return (
        <>        
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>                            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-user-tie"></i>  Crear usuario</h3>  
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
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3 text-center" >
                              <Form.Group as={Col} controlId="nombres">                                
                                <TextField
                                    type ="text"
                                    label="Nombres"
                                    onChange={handleChange} 
                                    value = {form.name}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="apellidos">
                              <TextField
                                    type ="text"
                                    label="Apellidos"
                                    onChange={handleChange} 
                                    value = {form.lastName}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="telefono">                                                                
                                <TextField
                                    type ="number"
                                    label="Teléfono"
                                    onChange={handleChange} 
                                    value = {form.nPhone}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="ndocumento">
                                <TextField
                                    type ="number"
                                    label="Número de documento"
                                    onChange={handleChange} 
                                    value = {form.nIdentif}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="nomusuario">                                                                
                                <TextField
                                    type ="text"
                                    label="Nombre de usuario"
                                    onChange={handleChange} 
                                    value = {form.userName}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="contraseña">
                                <TextField
                                    type ="number"
                                    label="Contraseña"
                                    onChange={handleChange} 
                                    value = {form.password}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="fingreso">                                                                
                                <TextField
                                    label="Fecha de ingreso"
                                    onChange={handleChange} 
                                    value = {form.dateAdmission}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="tipousuario">
                                <TextField
                                    type ="text"
                                    label="Tipo de usuario"
                                    onChange={handleChange} 
                                    value = {form.typeUser}
                                    id="outlined-size-small"
                                    size="small"
                                />
                              </Form.Group>
                            </Row> 
                            <hr/>
                            <div className='text-end'>             
                                <Link to='/usuarios'>
                                    <input type="submit" className='btn btn-secondary' value="Cancelar"></input>        
                                </Link>             
                                <Link to='/usuarios'>
                                    <input type="submit" className='btn btn-primary' value="Guardar"></input>        
                                </Link>
                                <input type="submit" className='btn btn-primary' value="Reset" onClick={handleReset}></input>        
                            </div>                 
                        </Form>
                    </Paper>
                </Grid>
            </Grid>
    </Container>
    </>
    )
}

export default UserRegForm;