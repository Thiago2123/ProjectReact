import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

import Logo from '../../assets/imgs/Logo.png';
import Button from '../Button';
//import ButtonLink from '../componentes/ButtonLink';


function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className= "Logo" src={Logo}  alt="Logo"/>
            </Link>
            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Adicionar Video 
            </Button>
        </nav>
    );
}

export default Menu; 