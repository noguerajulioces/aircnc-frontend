import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo"/>

      <div className="content">
        <p>
           Ofrezca <strong>spots</strong> para programadores y encuentre <strong>talentos</strong> para su empresa.
        </p>

        <form action="">
          <label htmlFor="email">mail</label>
          <input  type="email" 
                  id="email" 
                  placeholder="Inserte su email"/>
          <input type="Submit"/>Entrar
        </form>
      </div>
    </div>
  );
}

export default App;
