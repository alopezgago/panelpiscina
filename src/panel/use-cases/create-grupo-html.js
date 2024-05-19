import panelStore from "../../store/indicador.store";
import { Grupo } from "../models/grupo.model";



/**
 * 
 * @param {Grupo} grupo 
 * @returns 
 */
export const createDivGrupoHTML = ( grupo ) => {
    if (!grupo) throw new Error('Un objeto tipo grupo es requerido');

    const html = `
        <!-- contenedor-grupo ${ grupo.id} -->
            <div>
                <img src="../assets/icons/aq_indoor_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="Aire" class="img-texto-medio"/>
                <span class="nombre-grupo"> ${ grupo.nombre } </span>
            </div>
            <div data-id="${ grupo.id }" class="container ${ grupo.id }">
                
            </div>
        <!-- contenedor-grupo ${ grupo.id} FIN-->
    `;

    const divElement = document.createElement('Div');
    // divElement.setAttribute('data-id', grupo.id);
    // divElement.classList.add ('card', claseCSS);
    // divElement.classList.add ('tarjeta-borde-ambiente');
    divElement.innerHTML = html;
    return divElement;

}