import React, { useState } from 'react';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
   const [categorias, setCategorias] = useState([]);
   const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
   };
   const [valores, setValores] = useState(valoresIniciais);

   function setValor(chave, valor){
      setValores({
        ...valores,
        [chave]: valor,
      })
   }

   function mudarImput(infoEvento){               
    setValor(infoEvento.target.getAttribute('name'), 
    infoEvento.target.value);
  }

   console.log('[nomeDaCategoria]' , valores);

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {valores.nome}</h1>

        <form onSubmit = {function handleSubmit(infoEvento){
                          infoEvento.preventDefault(); 
                          setCategorias([ ...categorias, valores ]);
                          console.log('Formulario Enviado');
                          setValores(valoresIniciais);
                        }}>
          <FormField 
            label= "Nome da Categoria:"
            type= "text"
            name= "nome"
            value= {valores.nome}
            onChange= {mudarImput}
          />
          <div>
            <label>Descrição:</label>
            <textarea type="text" name= "descricao" value= {valores.descricao}  
              onChange= {mudarImput}>
            </textarea>
          </div>
          {/*
          <div>
            <label>Cor:</label>
            <input type="color" name= "cor" value= {valores.cor}  
              onChange= {mudarImput}>
            </input>
          </div>   */}
          <FormField 
            label= "Cor:"
            type= "color"
            name= "cor"
            value= {valores.cor}
            onChange= {mudarImput}
          />
          <button>Cadastrar </button>
        </form>
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key = {categoria + indice}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>
        
        <Link to="/"> 
            Ir pra home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;