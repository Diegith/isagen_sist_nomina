import { useState, useEffect } from "react";
import { FormGroup, FormControl, Input, InputLabel, Button, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/styles' ;
import { Link } from 'react-router-dom';
import { editHoliday, getHolidays } from '../../service/API';
import { useParams, useNavigate } from "react-router-dom";

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

const EditHoliday = () => {
    const [ holiday, setHoliday ] = useState(initialValues);
    const { date, typePermission, state } = holiday;
    const { id } = useParams();
    const classes = useStyle();
    const navigate = useNavigate();
    
    useEffect(() => {
        loadHolidayData();
        // eslint-disable-next-line
    }, []); 

    const loadHolidayData = async () => {
        const res = await getHolidays(id);
        setHoliday(res.data);
    }
    const onValueChange = (e) => {
        setHoliday({ ...holiday, [e.target.name]: e.target.value })        
    }

    const editHolidayDetails = async() => {
        await editHoliday(id, holiday);        
        navigate('../vacaciones', {replace: true});
    }
    return (
        <>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar solicitud vacaciones</Typography>
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
                <Button variant="contained" color='primary' style={{marginRight: 20}} onClick={()=> editHolidayDetails()}>Editar</Button>
                <Button variant="contained" color='secondary' LinkComponent={Link} to='/vacaciones'>Cancelar</Button>                           
            </div>
            
        </FormGroup>
        </>
    )
}

export default EditHoliday;