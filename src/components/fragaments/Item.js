import React from 'react';

const Item = (props) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {props.marca}
        <span className='badge bg-primary rounded-pill'>14</span>
      </li>
    </>
  );
};

export default Item;
