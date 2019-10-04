import React, { useState } from 'react';
import api from './services/api';

import './App.css';
import logo from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', {email});

    const { _id } = response.data;

    localStorage.setItem('user', _id);
  }

  return (
    <div className="container">
      <img src={logo} alt="logo"/>

      <div className="content">
        <p>
           Ofrezca <strong>spots</strong> para programadores y encuentre <strong>talentos</strong> para su empresa.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input  type="email" 
                  id="email" 
                  placeholder="Inserte su email"
                  value={email}
                  onChange={event => setEmail(event.target.value) }></input>
          <button type="Submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
