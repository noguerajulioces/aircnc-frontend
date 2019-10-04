import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history}){

    const [email, setEmail] = useState('');

    async function handleSubmit(event){
      event.preventDefault();
  
      const response = await api.post('/sessions', {email});
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('./dashboard');
    }

    return (
        <>
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
        </>
    )
}