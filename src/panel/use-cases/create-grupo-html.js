import panelStore from "../../store/indicador.store";
import { Grupo } from "../models/grupo.model";
import { selectOrigenIconoGrupo } from "./select-origen-iconos";



/**
 * 
 * @param {Grupo} grupo 
 * @returns 
 */
export const createDivGrupoHTML = ( grupo ) => {
    if (!grupo) throw new Error('Un objeto tipo grupo es requerido');

    const origenIcono = selectOrigenIconoGrupo( grupo.id );

    const html = `
        <!-- contenedor de cards de indicadores -grupo ${ grupo.id} -->
            <div>
                <img src="${ origenIcono }" alt="Aire" class="img-texto-medio"/>
                <span class="nombre-grupo"> ${ grupo.nombre } </span>
            </div>
            <div data-id="${ grupo.id }" class="container-cards ${ grupo.id }">
                
            </div>
        <!-- contenedor de cards de indicadores ${ grupo.id} FIN-->
    `;

    const divElement = document.createElement('Div');
    // divElement.setAttribute('data-id', grupo.id);
    // divElement.classList.add ('card', claseCSS);
    // divElement.classList.add ('tarjeta-borde-ambiente');
    divElement.innerHTML = html;
    return divElement;

}