import { Indicador } from "../models/indicador.model";
import { createCardHTML } from "./create-card-html";



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



/** Renderiza los indicadores de un grupp
 * @param {Indicador} indicadores Array de indicadores
 * @param {String|Number} grupoId Id del grupo para localizar html 
 */
export const renderCardIndicadoresByGrupo = ( indicadores = [], grupoId ) => {
    
  const element = document.querySelector(  `.${ grupoId }` );

  if(!element) throw new Error ('(renderCardIndicadorByGrupo) Elemento HTML no encontrado/no existe');


  indicadores.forEach(function ( indicador ) {
     // console.log('Interaciones.. -- HTML:', element);
     // console.log('Indicador:', indicador)
      element.append( createCardHTML( indicador ) )
    });

}


