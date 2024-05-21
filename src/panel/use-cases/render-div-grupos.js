import { Grupo } from "../models/grupo.model";
import { Indicador } from "../models/indicador.model";
import { createDivGrupoHTML } from "./create-grupo-html";
import { renderCardIndicadoresByGrupo } from "./render-card-indicadores";



let element;
/**
 * Renderiza cada grupo y sus indicadores
 * 
 * @param {String} elementId elemento HTML donde se añadirán los paneles
 * @param {Grupo} grupos array de grupos dados de alta
 * @param {Indicador} indicadores array de grupos dados de alta
 */
export const renderDivGrupos = ( elementId, grupos = [], indicadores = [] ) => {
        //optimización para evitar buscar en el DOM cada vez (si no existe ya, lo crea)
        if (!element)
            element = document.querySelector( elementId ); // busca el Div Panel
        
        if (!element) 
            throw new Error ('(renderDivGrupos): El elemento HTML no se ha encontrado o no existe');


        grupos.forEach( grupo  => { 
            
            // crea el Div contenedor del grupo
           element.append( createDivGrupoHTML( grupo ) );

            // Añadimos los indicadores asociados a cada grupo
            renderCardIndicadoresByGrupo( 
                indicadores.filter( ind => ind.grupo === grupo.id), 
                grupo.id );

        });

}
