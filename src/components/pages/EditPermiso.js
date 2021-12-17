import { useState, useEffect, Fragment } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { editPermiso, getPermisos } from '../../service/API';
import { useNavigate, useParams } from "react-router-dom";

const useStyle =  makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

const initialValues = {
    id:null,
    date: "",
    typePermission: "",
    state: ""
}

const EditPermiso = () => {
    const [ permiso, setPermiso ] = useState(initialValues);
    const { date, typePermission, state } = permiso;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();

    useEffect(() => {
        loadPermisoData();
        // eslint-disable-next-line
    }, []); 

    const loadPermisoData = async () => {
        const res = await getPermisos(id);
        setPermiso(res.data);
    }

    const onValueChange = (e) => {
        setPermiso({ ...permiso, [e.target.name]: e.target.value })
    }

    const editPermisoDetails = async() => {
        await editPermiso(id, permiso);        
        navigate('../permisos', {replace: true});
    }

    return (
        <Fragment>
        <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>                                        
                    <FormGroup className={classes.container}>
                        <Typography className='text-center' variant="h4">Editar permiso</Typography>
                        <br/>
                        <FormControl>
                            <InputLabel>Fecha</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='date' value={date}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Tipo de vacaciones</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='typePermission' value={typePermission}/>
                        </FormControl>            
                        <br/>
                        <FormControl>
                            <InputLabel>Estado</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='state' value={state}/>
                        </FormControl>
                        <br/>
                        <div className='text-end'>
                            <Button variant="contained" color='primary' style={{marginRight: 20}} onClick={()=> editPermisoDetails()}>Guardar</Button>
                            <Button variant="contained" color='secondary' LinkComponent={Link} to='/permisos'>Cancelar</Button>                           
                        </div>            
                    </FormGroup>
                    </Paper>    
                </Grid> 
            </Container> 
        </Fragment>
    )
}

export default EditPermiso;