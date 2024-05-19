import { Indicador } from "../models/indicador.model";
import { createCardHTML } from "./create-card-html";




const obtenerEl = ( ind ) => {


}


/**
 * 
 * @param {Indicador} indicadores array de indicadores
 * @returns 
 */
export const renderCardIndicadores = ( indicadores = [] ) => {

    //TODO: referencia
    let element = '';

    indicadores.forEach(function ( indicador ) {
        element = document.querySelector(  `.${ indicador.grupo }` );
        element.append( createCardHTML( indicador ) )
      });

}


