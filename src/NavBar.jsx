
import React, { useState } from 'react';

export const NavBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
        return (
            <div className="nav-bar">
                <a href="/"><img className='logo nav-elem' src="../public/logo/Logo.png" alt="Logo" /></a>
                <form className="input-form nav-elem" >
                    <input type="text" className="input input__lg nav-elem" name="text" autoComplete="off"  onChange={handleInputChange} />
                </form>
                <select className="lista-desplegable nav-elem" name="tipo" id="">
                    <option value="">Seleccione un tipo.</option>
                    <option value="">Cuarzo 1</option>
                    <option value="">Cuarzo 2</option>
                </select>
            </div>
        )
    }