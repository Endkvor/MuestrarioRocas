import React, { useState } from 'react';
export const TablaCentral = (objeto) => {
    if(objeto.muestra.split(' ')[0]=''){
        const nombre = objeto.muestra.split(' ')[1];
    }else{
        const nombre = objeto.muestra.split(' ')[0];        
    }
    const nombre = objeto.muestra.split(' ')[0];
    
    const [hoveredNombre, setHoveredNombre] = useState('');

    const handleMouseEnter = () => {
        setHoveredNombre(objeto);
    };
    const handleMouseLeave = () => {
        setHoveredNombre('')
    };
    const handleClick = ()=>{
         // Aquí puedes usar algún mecanismo para pasar las props al componente MainPage
        // Por ejemplo, puedes llamar a una función o usar un estado en MainPage para almacenar las props.
        // Aquí, solo consoleamos las props para mostrar el concepto.
        console.log('Props al hacer clic:', objeto);
        objeto.onClick(objeto); // Llama a la función onClick definida en MainPage y pasa las props

    };

    const tablaRender = (
        <div>

            <div
                className="small-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            ><p className="small-title">{`${objeto.numero+1}`}</p>
                <p className="small-title" >{`${nombre}`}</p>
            </div>
        </div>
    )
    return (
        tablaRender
    )
}