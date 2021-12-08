import React, {useState, Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import Solicitudes from './Solicitudes';

export default function Home()
{    
    
const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


    return (
        <Fragment>
            <div className=''>
            <nav className='navbar'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}
                    />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>                    
                    <li className ='nav-item'>
                        <Link 
                        to='/solicitudes' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Solicitudes
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/certificadolaboral' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Certificado laboral
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/nomina' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Nómina
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/editarusuario' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Editar usuario
                        </Link> 
                    </li>
                </ul>
            </nav>
            <Solicitudes />
            </div>                    
        </Fragment>  
    );
}