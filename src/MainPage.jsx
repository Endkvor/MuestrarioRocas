import React, { useState, useEffect } from 'react';
import { ElementoGrande } from './ElementoGrande.jsx'
import { NavBar } from './NavBar.jsx'
import { TablaCentral } from './TablaCentral.jsx';
import { Footer } from './Footer.jsx'
//Data
import Papa from 'papaparse';

//console.log(rocasBD)

export function MainPage() {
    // click 
    const [clickedProps, setClickedProps] = useState(null); // Estado para almacenar las props al hacer clic

    // Función para manejar las props cuando se hace clic en TablaCentral
    const handleTableClick = (props) => {
        setClickedProps(props); // Al hacer clic, almacenamos las props en el estado
    };

    //
    const defaultIndex = 0;
    const [csvData, setCsvData] = useState([]);
    const [elementoGrandeRenderizado, setElementoGrandeRenderizado] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./src/Rocas.csv');
            const reader = response.body.getReader();
            const result = await reader.read();
            const text = new TextDecoder().decode(result.value);

            Papa.parse(text, {
                header: true,
                complete: (parsedData) => {
                    setCsvData(parsedData.data);
                    //


                    ///
                },
            });
        };

        fetchData();
    }, []);

    //console.log(contIDs)
    console.log(csvData)
    const csvDataId = [];
    let contIDs = 1;
    for (let index = 0; index < csvData.length; index++) {
        console.log(csvData[index].Id)
        if (csvData[index].Id == contIDs) {
            csvDataId.push(
                csvData[index]
            )
            contIDs = contIDs + 1;
        }
    }
    //Creamos los elementos a renderizar
    const elementosCentrales = [];
    for (let index = 0; index < csvDataId.length; index++) {
        elementosCentrales.push(
            <TablaCentral
                onClick={handleTableClick}
                key={index}
                bdCompleta={csvData}
                muestra={csvDataId[index].Muestra}
                localidad={csvDataId[index].Localidad}
                utilidad={csvDataId[index].Utilidad}
                donador={csvDataId[index].Donador}
                imagen={csvDataId[index].URL}
                tipo={csvDataId[index].Tipo}
                idRoca={csvDataId[index].Id}
            />
        )
    }
    console.log(`Propiedades a poner en Elementogrande ${clickedProps}`)

    return (

        <div>
            <>{console.log(csvData)}</>
            <NavBar />



            <div className='content-container'>
                {clickedProps && !elementoGrandeRenderizado && (<ElementoGrande {...clickedProps} />)

                } {/* Renderiza ElementoGrande con las props al hacer clic */}



                {

                    csvData.length > 0 && !elementoGrandeRenderizado ? (
                        <ElementoGrande
                            bdCompleta={csvData}
                            muestra={csvData[defaultIndex].Muestra}
                            localidad={csvData[defaultIndex].Localidad}
                            utilidad={csvData[defaultIndex].Utilidad}
                            donador={csvData[defaultIndex].Donador}
                            imagen={csvData[defaultIndex].URL}
                            tipo={csvData[defaultIndex].Tipo}
                            idRoca={csvData[defaultIndex].Id}
                        />
                    ) : (
                        elementoGrandeRenderizado && <p>No Cargo la base de Datos</p>
                    )}

                <div className='tabla-central'>
                    {csvDataId.length > 0 ? (
                        elementosCentrales
                    ) : (
                        <p>No hay datos disponibles.</p>
                    )}

                </div>
            </div>
            <Footer />
        </div>

    );

}
