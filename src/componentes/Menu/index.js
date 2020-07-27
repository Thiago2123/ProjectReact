import React from 'react';
import './Menu.css';

import Logo from '../../assets/imgs/Logo.png';
import Button from '../Button';
//import ButtonLink from '../componentes/ButtonLink';


function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className= "Logo" src={Logo}  alt="Logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Video 
            </Button>
        </nav>
    );
}

export default Menu; 