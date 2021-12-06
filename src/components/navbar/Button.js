import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button(){
    return(
        <Link to='cerrarsesión'>
            <button className='btnn'>Cerrar sesión            
            </button>        
        </Link>
    );
}