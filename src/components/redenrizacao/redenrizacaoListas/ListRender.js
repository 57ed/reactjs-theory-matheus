import React from 'react';
import RenderItens from './RenderItens';

const ListRender = () => {
  const meusItens = ['React', 'Vue', 'Angular'];
  return (
    <div className='row'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Renderização de Listas</h1>
      </div>
      <div className='col-md-12'>
        <RenderItens itens={meusItens} />
        <RenderItens itens={[]} />
      </div>
    </div>
  );
};

export default ListRender;
