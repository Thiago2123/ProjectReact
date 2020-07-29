import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/imgs/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className= "Logo" src={Logo}  alt="Logo"/>
      </a>
      <p>
        Orgulhosamente criado durante a quarentena na intenção de 
        {' '}
        <a href="https://i.pinimg.com/originals/1c/eb/2f/1ceb2f2e66e446780eb232dd6376356b.gif">
          Imprecionar a Nic
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
