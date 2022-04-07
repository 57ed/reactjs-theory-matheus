import React from 'react';

const Props = (props) => {
  return (
    <div className='row mt-5 mb-4'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Props</h1>
      </div>
      <div className='col-md-12'>
        <p className='para-info'>Olá {props.nome}, tudo bem?!</p>
      </div>
    </div>
  );
};

export default Props;
