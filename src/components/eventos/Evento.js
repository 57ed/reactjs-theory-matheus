import React from 'react';
import Form from './Form';

const Evento = ({ numero }) => {
  function meuEvento() {
    console.log(`O número nº ${numero} fui ativado!`);
  }

  return (
    <div className='row mt-4 mb-4 p-3'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Eventos</h1>
      </div>
      <div className='col-md-12'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Clique para ativar</h5>
            <button
              onClick={meuEvento}
              type='button'
              className='btn btn-outline-success'>
              Ative aqui!
            </button>
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Evento;
