import React from 'react';

const Form = () => {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log('Cadastrou o usuário!');
  }
  return (
    <div className='row mt-4 mb-4 p-3'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Eventos Formulário</h1>
      </div>
      <div className='col-md-12'>
        <form onSubmit={cadastrarUsuario}>
          <div className='mb-3'>
            <label htmlFor='form_text' className='form-label'>
              Digite o seu nome
            </label>
            <input type='text' className='form-control' name='form_user' />
          </div>
          <button type='submit' className='btn btn-outline-primary'>
            Enviar Evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
