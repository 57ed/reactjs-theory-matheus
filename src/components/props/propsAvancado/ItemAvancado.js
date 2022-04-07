import PropTypes from 'prop-types';
import React from 'react';

const ItemAvancado = ({ marca, ano_lancamento }) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        Marca {marca}
        <span className='badge bg-primary rounded-pill'>
          Ano Lançamento {ano_lancamento}
        </span>
      </li>
    </>
  );
};
ItemAvancado.prototype = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number
};
ItemAvancado.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 0
};

export default ItemAvancado;
