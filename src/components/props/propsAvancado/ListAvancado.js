import React from 'react';
import ItemAvancado from './ItemAvancado';

const ListAvancado = () => {
  return (
    <div className='row mt-4 mb-4 p-4'>
      <div className='col md-12'>
        <h1 className='text-center text-primary'>Props Avançado</h1>
        <p>Usando PropTypes.</p>
      </div>
      <div className='col-md-12'>
        <ul className='list-group'>
          <ItemAvancado marca='Onix' ano_lancamento={2012} />
          <ItemAvancado marca='Ferrari' ano_lancamento={1973} />
          <ItemAvancado marca='Mavarick' ano_lancamento={1973} />
          <ItemAvancado />
        </ul>
      </div>
    </div>
  );
};

export default ListAvancado;
