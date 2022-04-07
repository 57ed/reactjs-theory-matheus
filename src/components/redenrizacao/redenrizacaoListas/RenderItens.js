import React from 'react';

const RenderItens = ({ itens }) => {
  return (
    <div className='row mb-4 mt-4 p-3'>
      <div className='col-md-12'>
        <ul className='list-group'>
          <li className='list-group-item active' aria-current='true'>
            Meus Itens
          </li>
          {itens.length > 0 ? (
            itens.map((item, index) => (
              <li key={index} className='list-group-item'>
                {item}
              </li>
            ))
          ) : (
            <li className='list-group-item'>Não há itens na lista!</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RenderItens;
