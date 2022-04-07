import React from 'react';
import styles from '../css-modules/Pessoa.module.css';

const Pessoa = ({ nome, idade, profissao, foto }) => {
  return (
    <div className='row mt-5 mb-4 p-3'>
      <div className='col-md-12'>
        <h1 className='text-center text-primary'>Props - Destruction</h1>
      </div>
      <div className='col-md-12'>
        <div className='card'>
          <img src={foto} className='card-img-top' alt={nome} />
          <div className='card-body'>
            <h5 className='card-title'>{nome}</h5>
            <ul className='list-group'>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                Idade
                <span className='badge bg-primary rounded-pill'>{idade}</span>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center'>
                Profissão
                <span className='badge bg-primary rounded-pill'>
                  {profissao}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col-md-12 mt-5 mb-4 p-3'>
        <h1 className='text-center text-primary'>Module.css</h1>
        <div className={styles.fraseContainer}>
          <p>Classe frase container: modules.css</p>
        </div>
        <div className={styles.fraseContent}>
          <p>Classe frase content: modules.css</p>
        </div>
      </div>
    </div>
  );
};

export default Pessoa;
