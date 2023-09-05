import { useLocation } from 'react-router-dom';

import React, { useEffect, useState } from "react";
import { NavBarGal } from "./NavBarGal";
import { Footer } from "./Footer"

export const Galeria = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const imagenes = queryParams.get('imagenes');
    const nombres = queryParams.get('nombres');
   
    const imagenesArray = imagenes ? imagenes.split(',') : [];
    const nombresArray = nombres ? nombres.split(',') : [];
    const rutaBase = '../images/'


    const imagenesRender = imagenesArray.map((url, index) => (
        <figure key={index}>
            {console.log(`${rutaBase}${url}`)}
            <img src={`${rutaBase}${url}`} alt={`Imagen ${index}`} />
            <figcaption>{nombresArray[index]}</figcaption>
        </figure>
    ));

    return (
        <div className="galeria/container">
            <NavBarGal />
            <h1>Muestras.</h1>
            <div className="galeria-images">                
                {imagenesRender}
            </div>
            <Footer />
        </div>
           )
}