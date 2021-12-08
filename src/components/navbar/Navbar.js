import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Footer from './Footer';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
    return (
        <>
        <div className="bg">
            <nav className='navbar'>                
                <Link to='/' className="navbar-logo"  onClick={closeMobileMenu}>
                <img
                    src="/logo_ISAGEN.png"
                    width="45"
                    height="45"
                    className="d-inline-block align-top"
                    alt=""
                  />   ISAGEN
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'}
                    />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>                    
                                       
                <li className ='nav-item'>
                        <Link 
                        to='/' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Inicio
                        </Link> 
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link 
                        to='/permisos' 
                        className='nav-links' 
                        onClick={closeMobileMenu}
                        >
                            Procesar <i className='fas fa-caret-down'></i>
                        </Link> 
                        {dropdown && <Dropdown />}
                    </li>                    
                    <li className ='nav-item'>
                        <Link 
                        to='/usuarios' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Usuarios
                        </Link> 
                    </li>
                    <li className ='nav-item'>
                        <Link 
                        to='/reportes' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                        Reportes
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
                </ul>                    
                <Button />
            </nav> 
            </div>
        </>
    )
}