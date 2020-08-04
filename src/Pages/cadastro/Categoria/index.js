import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function mudarImput(infoEvento) {
    setValor(infoEvento.target.getAttribute('name'),
      infoEvento.target.value);
  }

  useEffect(() => {
    console.log('aq');
    const URL = 'urlAqui';
    fetch(URL)
      .then(async(respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta]);
      });

    /*setTimeout(() => {
      setCategorias([...categorias, {   
        "id" : 1,
        "nome" : "Front End",
        "descricao" : "Uma categoria pica",
        "cor" : "#cdb1ff"
    },
    {   
        "id" : 2,
        "nome" : "Back End",
        "descricao" : "Uma categoria pica",
        "cor" : "#cdb1ff"
    }]);
    }, 3 * 1000);*/
  }, [

  ]);

  //console.log('[nomeDaCategoria]', valores);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([...categorias, valores]);
        console.log('Formulario Enviado');
        setValores(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={valores.nome}
          onChange={mudarImput}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={valores.descricao}
          onChange={mudarImput}
        />
        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={valores.cor}
          onChange={mudarImput}
        />
        <button>Cadastrar </button>
        {categorias.length === 0 && 
          <div>Loading...</div>
        }
      </form>
      <ul>
        {categorias.map((categoria, indice) => (
          <li key={categoria + indice}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
