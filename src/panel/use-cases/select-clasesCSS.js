import { TiposInd, TiposGrupo } from "../../store/indicador.store";



export const selectClaseCSSTarjetaByGrupo = ( grupo ) => {

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
 * @param {*} tipo 
 * @returns {Array(String)} devuelve 2 clases, para el valor y para el item GRID
 */
export const selectClaseCSSByTipo = ( tipo ) => {

    let clasesCSS = '';
    
    
    switch (tipo) {
        case TiposInd.Numero:
            clasesCSS = ['valor-num', 'div-ind-num-valor'];
            break;

        case TiposInd.Horas:
            clasesCSS = ['valor-hora', 'div-ind-num-valor'];
            break;

        case TiposInd.Texto:
            clasesCSS = ['valor-texto', 'div-ind-txt-valor'];
            break;
        
        default:
            clasesCSS = ['valor-texto', 'div-ind-txt-valor'];
            break;
    }

    return clasesCSS;

}


