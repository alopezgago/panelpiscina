import { Grupo } from "../models/grupo.model";
import { createDivGrupoHTML } from "./create-grupo-html";


/**
 * 
 * @param {String} elementId elemento HTML donde se añadirán los paneles
 * @param {Grupo} grupos array de grupos dados de alta
 */
export const renderDivGrupos = ( elementId, grupos = [] ) => {

        //TODO: referencia
        const element = document.querySelector( elementId );

        grupos.forEach( grupo  => { 
            
            element.append( createDivGrupoHTML( grupo ) )
            
        });

}
