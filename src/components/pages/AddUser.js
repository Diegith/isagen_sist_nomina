import { useState, Fragment } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { addUser } from '../../service/API';
import { useNavigate } from 'react-router-dom';

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
    names:"",
    lastNames: "",
    nPhone: 0,
    nIdent: 0,
    email: "",
    userName: "",
    password: "",
    dateAdmission: "",
    typeUser: "",
    state: ""
}

const AddUser = () => {
    const [ user, setUser ] = useState(initialValues);
    const {names, lastNames, nPhone, nIdent, email, userName, password, dateAdmission, typeUser } = user;
    const classes = useStyle();
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })        
    }

    const addUserDetails = async() => {
        await addUser(user);        
        navigate('../usuarios', {replace: true});
    }

    return (
        <Fragment>
        <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>                    
                    <FormGroup className={classes.container}>
                        <Typography variant="h4" className='text-center'>Crear Usuario</Typography>
                        <FormControl>
                            <InputLabel>Nombre</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='names' value={names}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Apellidos</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='lastNames' value={lastNames}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Telefono</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='nPhone' value={nPhone}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Numero de identificacion</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='nIdent'  value={nIdent}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Correo</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='email'  value={email}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Nombre de usuario</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='userName' value={userName}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Contraseña</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='password' value={password}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Fecha de admision</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='dateAdmission' value={dateAdmission}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Tipo de usuario</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='typeUser' value={typeUser}/>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel>Estado</InputLabel>
                            <Input onChange={(e) => onValueChange(e)} name='state'/>
                        </FormControl>
                        <br/>
                        <div className='text-end'>
                            <Button variant="contained" color='primary' style={{marginRight: 20}} onClick={()=> addUserDetails()}>Crear</Button>
                            <Button variant="contained" color='secondary' LinkComponent={Link} to='/usuarios'>Cancelar</Button>                           
                        </div>

                    </FormGroup>
                    </Paper>    
                </Grid> 
            </Container> 
        </Fragment>
    )
}

export default AddUser;