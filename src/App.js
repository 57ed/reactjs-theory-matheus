import { useState } from 'react';
import './App.css';
import Evento from './components/eventos/Evento';
import List from './components/fragaments/List';
import EventoProp from './components/props/metodosProps/EventoProp';
import Pessoa from './components/props/Pessoa';
import ListAvancado from './components/props/propsAvancado/ListAvancado';
import SayMyNAme from './components/props/SayMyName';
import Navbar from './components/reactRouter/Navbar';
import Condicional from './components/redenrizacao/redenrizacaoCondicao/Condicional';
import ListRender from './components/redenrizacao/redenrizacaoListas/ListRender';
import Saudacao from './components/stateLift/Saudacao';
import SeuNome from './components/stateLift/SeuNome';
import FormUseState from './components/usestate/FormUseState';

function App() {
  const nome = 'José';
  // na aula 14 o professor usou nome, setNome. Para ficar melhor registrado usei outra nomeação.
  const [funcionario, setFuncionario] = useState();

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mb-4'>
          <div className='col-md-12'>
            <h1 className='text-center text-primary'>
              Curso Reactjs - Matheus Battisti
            </h1>
          </div>
        </div>
        <SayMyNAme nome='Matheus' />
        <SayMyNAme nome='João' />
        <SayMyNAme nome={nome} />
        <Pessoa
          nome='Rodrigo'
          idade='28'
          profissao='Programador'
          foto='https://via.placeholder.com/150'
        />
        <List />
        <ListAvancado />
        <Evento numero={3} />
        <Evento numero={10} />
        <Evento numero={20} />
        <FormUseState />
        <EventoProp />
        <Condicional />
        <ListRender />
        <SeuNome setFuncionario={setFuncionario} />
        <Saudacao funcionario={funcionario} />
      </div>
    </>
  );
}

export default App;
