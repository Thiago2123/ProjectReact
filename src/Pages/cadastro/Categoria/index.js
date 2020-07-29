import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>pagina Cadastro de Categoria</h1>
        <Link to="/"> 
            Ir pra home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;