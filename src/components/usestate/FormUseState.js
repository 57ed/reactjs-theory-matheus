import React, { useState } from 'react';

const FormUseState = () => {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div className='row mt-4 mb-4 p-3'>
      <div className='col-md-12'>
        <h1 className='text-center text-info'>Formulário: useState</h1>
      </div>
      <div className='col-md-12'>
        <form onSubmit={cadastrarUsuario}>
          <div className='mb-3'>
            <label htmlFor='user_um' className='form-label'>
              Digite o seu nome
            </label>
            <input
              type='text'
              className='form-control'
              id='user_um'
              name='name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='user_pwd' className='form-label'>
              Digite sua senha
            </label>
            <input
              type='password'
              className='form-control'
              id='user_pwd'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-outline-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormUseState;
