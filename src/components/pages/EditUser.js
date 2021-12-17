import { useState, useEffect } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import { Link } from 'react-router-dom';
import { editUser, getUsers } from '../../service/API';
import { useParams, useNavigate } from "react-router-dom";

const useStyle =  makeStyles({
    container:{
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *':{
            marginTop: 20
        }
    }
})

const initialValues = {
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

const EditUser = () => {
    const [ user, setUser ] = useState(initialValues);
    const { names, lastNames, nPhone, nIdent, email, userName, password, dateAdmission, typeUser, state } = user;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();
    
    useEffect(() => {
        loadUserData();
        // eslint-disable-next-line
    }, []); 

    const loadUserData = async () => {
        const res = await getUsers(id);
        setUser(res.data);
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })        
    }

    const editUserDetails = async() => {
        await editUser(id, user);
        navigate('../usuarios', {replace: true});
    }

    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Usuario</Typography>
            <hr/>
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
                <Input onChange={(e) => onValueChange(e)} name='state' value={state}/>
            </FormControl>
            <br/>
            <div className='text-end'>
                <Button variant="contained" color='primary' onClick={()=> editUserDetails()}>Editar</Button>
                <Button variant="contained" color='secondary' LinkComponent={Link} to='/usuarios'>Cancelar</Button>                           
            </div>            
        </FormGroup>
        </>
    )
}

export default EditUser;