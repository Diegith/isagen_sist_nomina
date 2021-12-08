import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function NominaForm() {
    return (
        <>        
            <Container width="lg" sx={{ mt: 4, mb: 4 }}>                            
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <div className="col-sm-7 col-md-6 col-lg-6">
                            <h3><i className="fas fa-receipt"></i>  Nómina</h3>  
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
                                <div className="col-sm-12 mt-md-4 mt-sm-2">
                                  <div class="input-group mb-3">
                                    <span className="input-group-text ">Fecha requerida</span>
                                    <label className="form-control text-center">20/10/2021</label>
                                  </div>
                                  <br />
                                  <div class="input-group mb-3">
                                    <span className="input-group-text ">Nombre del usuario</span>
                                    <label className="form-control text-center">Diego Albarracin</label>
                                  </div>
                                  <br />
                                  <div className="input-group mb-3">
                                    <label className="form-control">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, voluptates repudiandae saepe amet hic aut assumenda qui atque est omnis reiciendis sit esse corporis fuga dignissimos? Ea qui possimus recusandae!</label>
                                  </div>
                                  <br />
                                  <div className='text-end'>
                                    <Link to='/'>
                                      <button className='btn btn-secondary'>Cancelar</button>        
                                    </Link>
                                    <Link to='/'>
                                      <button className='btn btn-primary'>Descargar</button>        
                                    </Link>
                                  </div> 
                                </div>

                              </Form.Group>
                            </Row>
                            <br/>
                                  
                        </Form>
                    </Paper>
                </Grid>
            </Grid>
    </Container>
    </>
    )
}
