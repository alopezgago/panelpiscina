import { TiposInd } from "../../store/indicador.store";
import { Indicador } from "../models/indicador.model";
import { formateaFecha, FFecha } from "./index";


let spanValorHTML;
let spanFechaHTML;

/**
 * 
 * @param {String} elementId 
 * @param {Indicador} indicador indicador del que tomaremos el valor 
 */
export const renderSpanValor = ( elementId, indicador ) => {
    if (!spanValorHTML) { 
        spanValorHTML = document.getElementById( `valor-${ elementId }`);
        spanFechaHTML = document.getElementById( `fechaAct-${ elementId }`);
    }
    if (spanValorHTML.id !== ( `valor-${ elementId }`) ){ 
        spanValorHTML = document.getElementById( `valor-${ elementId }`);
        spanFechaHTML = document.getElementById( `fechaAct-${ elementId }`);
    }
    
    let html = (indicador.valor);
    if (indicador.tipo === TiposInd.Numero && !isNaN(html)) 
        html = html.toFixed(indicador.decimales);

    spanValorHTML.innerHTML = html;
    // spanFechaHTML.innerHTML = formateaFecha( indicador.updateAt, FFecha.fyhLocalCorta);
    spanFechaHTML.innerHTML = formateaFecha( indicador.updateAt, 
                                        FFecha.fyhLocalCorta);

    //TODO: para obtener los ejemplos del formato de fechas
    // for (const p in FFecha) {
    //     console.log(`>Ej: ${ p }: ${formateaFecha( indicador.updateAt, FFecha[p])}`)
    // };

}