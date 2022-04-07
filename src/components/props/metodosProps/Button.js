import React from 'react';

const Button = (props) => {
  return (
    <div className='row'>
      <div className='col-md-12 mt-4 mb-4 p-3'>
        <button
          onClick={props.event}
          type='button'
          className='btn btn-outline-primary'>
          {props.text}
        </button>
      </div>
    </div>
  );
};

export default Button;
