import React, { useState } from 'react';

const Condicional = () => {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    // console.log('Testando');
    setUserEmail(email);
    // console.log(userEmail);
  }
  function limparEmail() {
    setUserEmail('');
  }
  return (
    <div className='row'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Condicional IF</h1>
      </div>
      <div className='col-md-12'>
        <form>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Digite o seu email
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div> */}
          <div className='mb-3'>
            <button
              onClick={enviarEmail}
              type='submit'
              className='btn btn-primary'>
              Enviar Email
            </button>
          </div>
          {userEmail && (
            <>
              <div className='mb-3'>
                <div className='alert alert-primary' role='alert'>
                  O e-mail do usuário é: {userEmail}
                </div>
              </div>
              <div className='mb-3'>
                <button
                  onClick={limparEmail}
                  type='button'
                  className='btn btn-warning'>
                  Limpar Email
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Condicional;
