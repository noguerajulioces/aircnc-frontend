import React, { useState, useMemo } from 'react';

import camera from '../../assets/camera.svg';

import './style.css';

export default function New(){
    const [tech, setTechs] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');

    const [thumbnail, setThumbnail] = useState(null);

    function handleSubmit(){

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label id="thumbnail">
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select image"></img>
            </label>
        </form>
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Empresa *</label>
            <input
            id="company"
            placeholder="Ingrese su empresa"
            value={company}
            onChange={event => setCompany(event.target.value)} />
            
            <label htmlFor="tech">Tecnologías * <span>(separadas por comas)</span></label>
            <input 
                id="tech"
                placeholder="Cuales son sus tecnologías"
                value={tech}
                onChange={event => setTechs(event.target.value)} 
            />

            <label htmlFor="price">Valor por día * <span>(deja en blanco para gratuito)</span></label>
            <input 
                id="price"
                placeholder="Cuanto cobra por día"
                value={price}
                onChange={event => setPrice(event.target.value)} 
            />

            <button type="submit" className="btn">Guardar</button>
        </form>
        </>
    )
}