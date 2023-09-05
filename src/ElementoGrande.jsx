import{useState}from 'react';
import { Link } from 'react-router-dom';

export const ElementoGrande = (objeto) => {
    console.log(objeto)
    const imagenesArrayURL=[]
    const namesArray=[]
    for(let index=0;index<objeto.bdCompleta.length;index ++){
if(objeto.bdCompleta[index].Id==objeto.idRoca){
    imagenesArrayURL.push(objeto.bdCompleta[index].URL)
    namesArray.push(objeto.bdCompleta[index].Muestra)
}
    }
    //Lectura de datos para las imagenes (rutas)
    //const imagenesArrayURL = ["Picture1.jpg", "Picture2.jpg"];
    const rutaIMG = '../images/' + objeto.imagen.toLowerCase();
    //Use state para pasar datos a la galeria
    const [stateProps,setStateProps]=useState({arrayURL:imagenesArrayURL,arratNames:namesArray});
    //console.log(stateProps);

    return (
        <div className="big-container">
            <p className="medium-title" >{objeto.muestra}</p>
            <img className='imagen-selec' src={rutaIMG} alt="Imagen Del Elemento Seleccionado" />
            <p>Utilidad: {objeto.utilidad}</p>
            <p>Tipo:{objeto.tipo}</p>
            <Link to={`/galeria?imagenes=${encodeURIComponent(imagenesArrayURL.join(','))}&nombres=${encodeURIComponent(namesArray.join(','))}`}> Ver Muestras.</Link>
        </div>
    )
}