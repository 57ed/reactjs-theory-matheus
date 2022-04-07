import React from 'react';

const Saudacao = ({ funcionario }) => {
  function gerarSaudacao(algumFuncionario) {
    return `Olá, ${algumFuncionario}, tudo bem?`;
  }

  return (
    <div className='row'>
      <div className='col-md-12'>
        {funcionario ? (
          <div className='card-title'>{gerarSaudacao(funcionario)}</div>
        ) : (
          <div className='card-body'>
            <p>Nenhum funcionário registrado.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saudacao;
