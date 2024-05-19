import indicadorStore from "../../store/indicador.store";



export const selectClaseCSSByGrupo = ( grupo ) => {

    let claseCSS = '';
    
    
    switch (grupo) {
        case indicadorStore.TiposGrupo.ambiente:
            claseCSS = 'tarjeta-borde-ambiente';
            break;

        case indicadorStore.TiposGrupo.agua:
            claseCSS = 'tarjeta-borde-agua';
            break;

        case indicadorStore.TiposGrupo.obs:
            claseCSS = 'tarjeta-borde-blanco';
            break;
        
        default:
            claseCSS = 'tarjeta-borde-blanco';
            break;
    }

    return claseCSS;

}