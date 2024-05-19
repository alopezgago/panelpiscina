import { Indicador } from "../models/indicador.model";



/**
 * 
 * @param {String} elementId 
 * @param {String} valor 
 */
export const renderSpanValor = ( elementId, valor = '' ) => {
    
    let texto = 'Hola mundo';


    const spanValorHTML = document.getElementById( elementId );
    spanValorHTML.innerHTML = valor;

}