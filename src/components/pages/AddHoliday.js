import { useState, Fragment } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { addHoliday } from '../../service/API';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

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

const AddHoliday = () => {
    const [ holiday, setHoliday ] = useState(initialValues);
    const { date, typePermission, state } = holiday;
    const classes = useStyle();
    const navigate = useNavigate();
    const onValueChange = (e) => {
        setHoliday({ ...holiday, [e.target.name]: e.target.value })        
    }

    const addHolidayDetails = async() => {
        await addHoliday(holiday);        
        navigate('../vacaciones', {replace: true});
    }

    return (
        <Fragment>
        <Container width="lg" sx={{ mt: 4, mb: 4 }}>            
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>                                        
                    <FormGroup className={classes.container}>
                        <Typography className='text-center' variant="h4">Solicitar vacaciones</Typography>
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
                            <Button variant="contained" color='primary' style={{marginRight: 20}} onClick={()=> addHolidayDetails()}>Crear</Button>                                                                                    
                            <Button variant="contained" color='secondary' LinkComponent={Link} to='/vacaciones'>Cancelar</Button>                           
                        </div>            
                    </FormGroup>
                    </Paper>    
                </Grid> 
            </Container> 
        </Fragment>
    )
}

export default AddHoliday;