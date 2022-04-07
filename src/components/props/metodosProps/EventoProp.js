import React from 'react';
import Button from './Button';

const EventoProp = ({ numero }) => {
  function meuEvento() {
    // console.log(`O número nº ${numero} fui ativado!`);
    console.log(`Ativando primeiro evento`);
  }
  function meuEventoDois() {
    console.log(`Ativando segundo Evento`);
  }

  return (
    <div className='row mt-4 mb-4 p-3'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Eventos Por Props</h1>
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
            <Button event={meuEvento} text='Primeiro Evento' />
            <Button event={meuEventoDois} text='Segundo Evento' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoProp;
