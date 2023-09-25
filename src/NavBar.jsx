
import React, { useState } from 'react';

export const NavBar = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        const text = event.target.value;
        setInputValue(text);

        onInputChange(text);
    };
    const tipos = ['Silicatos', 'Oxidos', 'Sulfuros', 'Nativo', 'Ignea', 'Carbonatos', 'Sulfatos', 'Arseniatos', 'N/A', 'Sulfatos', 'Filosilicatos', 'Haluros'];
    const selector = []
    for (let index = 0; index < tipos.length; index++) {
        selector.push(<option>{tipos[index]}</option>)
    }

    return (
        <div className="nav-bar">
            {/*
                <a href="/"><img className='logo nav-elem' src="../public/logo/Logo.png" alt="Logo" /></a>
        */}

            <a href="/">
                <div className='logo-container'>
                    <div className='logo-block'>
                        <p className='logo nav-elem'>Tabla Cuarzo </p>
                    </div>
                </div>


            </a>
            <form className="input-form nav-elem" >
                {/*                     <label htmlFor="">Buscar por Nombre</label> */}
                <input type="text" className="input input__lg nav-elem" name="text" autoComplete="off" placeholder='Buscar por nombre' onChange={handleInputChange} />

            </form>



            <select className="lista-desplegable nav-elem" name="tipo" id="">
                <option value="">Seleccione un tipo.</option>
                {selector}
            </select>
        </div>
    )
}