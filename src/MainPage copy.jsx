import { ElementoGrande } from './ElementoGrande.jsx'
import { NavBar } from './NavBar.jsx'
import { TablaCentral } from './TablaCentral.jsx';
//Data
import rocasBD from '../Rocas.xlsx'
import objeto from './prueba.json'
console.log (rocasBD);
export function MainPage() {
    const elementosCentrales = [];
    for (let index = 0; index < 95; index++) {
        elementosCentrales.push(
            <TablaCentral
                key={index}
                muestra={objeto.Muestra}
                localidad={objeto.Localidad}
                utilidad={objeto.Utilidad}
                donador={objeto.Donador}
                imagen={objeto.Imagen}
            />
            
        )

    }

    return (
        <div>

            <NavBar />
            <div className='content-container'>
                <ElementoGrande
                    objeto={objeto}
                    muestra={objeto.Muestra}
                    localidad={objeto.Localidad}
                    utilidad={objeto.Utilidad}
                    donador={objeto.Donador}
                    imagen={objeto.Imagen}
                    tipo={objeto.Tipo}
                />
                <div className='tabla-central'>
                    {elementosCentrales}
                </div>

            </div>

        </div>

    );
}