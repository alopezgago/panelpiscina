
/**
 * 
 * @param {String} grupoId id del grupo 
 * @returns {String} ruta del icono del grupo 
 */
export const selectOrigenIconoGrupo = ( grupoId ) => {

    let origenIcono = '';

    switch (grupoId) {
        case 'gru-01':
            origenIcono = "../assets/icons/icon-grupo01.svg"
            break;
    
        case 'gru-02':
            origenIcono = "../assets/icons/icon-grupo02.svg"
            break;
    
        case 'gru-03':
            origenIcono = "../assets/icons/icon-grupo03.svg"
            break;
    
        default:
            origenIcono = "../assets/icons/icon-grupo01.svg"
            break;
    }

    return origenIcono;

}


