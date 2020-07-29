import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label>Nome da Categoria</label>
          <input type="text"></input>
          <button>Cadastrar </button>
        </form>
        
        <Link to="/"> 
            Ir pra home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;