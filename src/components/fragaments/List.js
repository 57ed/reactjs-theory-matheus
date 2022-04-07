import React from 'react';
import Item from './Item';

const List = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12 mt-5 mb-5 p-3'>
          <div className='card-header'>
            <h1 className='text-center text-primary'>Fragments</h1>
          </div>
          <ul className='list-group'>
            <Item marca='Ferrari' />
            <Item marca='Fiat' />
            <Item marca='Honda Civic' />
            <Item marca='Chevrolet Onix' />
          </ul>
        </div>
      </div>
    </>
  );
};
export default List;
