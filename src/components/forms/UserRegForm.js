import React, {useRef, Fragment} from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

export default function UserRegForm() {
    const name = useRef();
    const lastName = useRef();
    const nPhone = useRef();
    const n_Indentif = useRef();
    const userName = useRef();
    const password = useRef();
    const dateAdmission = useRef();
    const typeUser = useRef();

    return (
        <Fragment>        
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
                        <Form>
                            <Row className="mb-3 text-center" >
                              <Form.Group as={Col} controlId="name">                                
                                <TextField
                                    label="Nombres"
                                    id="outlined-size-small"
                                    defaultValue="Nombres"
                                    size="small"
                                    ref={name}
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridPassword">
                              <TextField
                                    label="Apellidos"
                                    id="outlined-size-small"
                                    defaultValue="Apellidos"
                                    size="small"
                                    ref={lastName}
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="name">                                                                
                                <TextField
                                    label="Teléfono"
                                    id="outlined-size-small"
                                    defaultValue="Teléfono"
                                    size="small"
                                    ref={nPhone}
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridPassword">
                                <TextField
                                    label="Número de documento"
                                    id="outlined-size-small"
                                    defaultValue="Número de documento"
                                    size="small"
                                    ref={n_Indentif}
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="name">                                                                
                                <TextField
                                    label="Nombre de usuario"
                                    id="outlined-size-small"
                                    defaultValue="Nombre de usuario"
                                    size="small"
                                    ref={userName}
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridPassword">
                                <TextField
                                    label="Contraseña"
                                    id="outlined-size-small"
                                    defaultValue="Contraseña"
                                    size="small"
                                    ref={password}
                                />
                              </Form.Group>
                            </Row>
                            <br/>
                            <Row className="mb-3 text-center" >
                            <Form.Group as={Col} controlId="name">                                                                
                                <TextField
                                    label="Fecha de ingreso"
                                    id="outlined-size-small"
                                    defaultValue="Fecha de ingreso"
                                    size="small"
                                    ref={dateAdmission}
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridPassword">
                                <TextField
                                    label="Tipo de usuario"
                                    id="outlined-size-small"
                                    defaultValue="Tipo de usuario"
                                    size="small"
                                    ref={typeUser}
                                />
                              </Form.Group>
                            </Row> 
                            <hr/>
                            <div className='text-end'>             
                                
                              <button className='btn btn-primary'>Crear usuario</button>        
                                
                            </div>                 
                        </Form>
                    </Paper>
                </Grid>
            </Grid>
    </Container>
    </Fragment>
    )
}
