import React, { useState } from 'react';
import { MenuItems1 } from './MenuItems1';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export default function Dropdown() {
    const [click1, setClick1] = useState(false)

    const handleClick1 = () => setClick1(!click1)
    return (
        <>
            <ul onClick={handleClick1}
            className={click1 ? 'dropdownn-menu clicked':'dropdownn-menu'}>
                {MenuItems1.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} 
                                to={item.path} 
                                onClick={() =>setClick1(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
