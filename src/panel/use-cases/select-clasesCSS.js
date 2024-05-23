import { TiposInd, TiposGrupo } from "../../store/indicador.store";


/**
 * 
 * @param {String} grupo 
 * @returns 
 */
export const selectClaseCSSBordeCardByGrupo = ( grupo ) => {

    let claseCSS = '';
    
    
    switch (grupo) {
        case TiposGrupo.ambiente:
            claseCSS = 'tarjeta-borde-ambiente';
            break;

        case TiposGrupo.agua:
            claseCSS = 'tarjeta-borde-agua';
            break;

        case TiposGrupo.obs:
            claseCSS = 'tarjeta-borde-obs';
            break;
        
        default:
            claseCSS = 'tarjeta-borde-obs';
            break;
    }

    return claseCSS;

}

/**
 * 
 * @param {String} tipo 
 * @returns {Array(String)} devuelve 2 clases, para el valor y para el item GRID
 */
export const selectClaseCSSByTipo = ( tipo ) => {

    let clasesCSS = '';
    
    
    switch (tipo) {
        case TiposInd.Numero:
            clasesCSS = 'div-ind-num-valor';
            break;

        case TiposInd.Horas:
            clasesCSS = 'div-ind-num-valor';
            break;

        case TiposInd.Texto:
            clasesCSS = 'div-ind-txt-valor';
            break;
        
        default:
            clasesCSS = 'div-ind-txt-valor';
            break;
    }

    return clasesCSS;

}

/**
 * Devuelve las clases CSS en función de si el tema es 'dark' o normal
 * 
 * @param {Boolean} dark true | false 
 * @returns {String} string con clase CSS
 */

export const selectClaseCSSTemaDark = ( dark = true ) => {

    let claseCSS = '';

    if (dark) {
        claseCSS = 'tema-oscuro';
    } else {
        claseCSS = 'tema-claro';
    };


    return claseCSS;
}
