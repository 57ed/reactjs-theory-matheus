import React from 'react';

const SeuNome = ({ setFuncionario }) => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>State Lift</h1>
      </div>
      <div className='col-md-12'>
        <div className='mb-3'>
          <label className='form-label' htmlFor='func'>
            Digite seu nome:
          </label>
          <input
            type='text'
            className='form-control'
            id='func'
            placeholder='Nome do Funcionário'
            onChange={(e) => setFuncionario(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SeuNome;
