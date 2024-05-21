
import { Indicador } from '../panel/models/indicador.model';
import { Grupo } from '../panel/models/grupo.model';



export const TiposInd = {
    Numero: 'numero',
    Horas: 'hh:mm',
    Texto: 'texto'
}

export const TiposGrupo = {
    ambiente: 'gru-01',
    agua: 'gru-02',
    obs: 'gru-03'
    // ambiente: 'Datos Ambientales',
    // agua: 'Datos del Agua',
    // obs: 'Observaciones'
};

const state = {
    indicadores: [
        new Indicador('ind-01', 'Temperatura',           24.1,  TiposInd.Numero, 'ºC',   1,     TiposGrupo.ambiente, '' , new Date()),
        new Indicador('ind-02', 'Humedad relativa',      23.0,  TiposInd.Numero, '%',    1,     TiposGrupo.ambiente, '' , new Date()),
        new Indicador('ind-03', 'Calidad Aire',         452.0,  TiposInd.Numero, 'ppm',  1,     TiposGrupo.ambiente, 'Concentración C02' , new Date()),
        new Indicador('ind-04', 'Temperatura Agua',      23.0,  TiposInd.Numero, 'ºC',   1,     TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-05', 'Cloro Libre Residual',   2.1,  TiposInd.Numero, 'mg/l', 1,     TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-06', 'Turbidez',               2.0,  TiposInd.Numero, 'UNF',  1,     TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-08', 'Transparencia',          9.0,  TiposInd.Numero, 'x',    1,     TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-07', 'Tiempo Recirculación','01:30', TiposInd.Horas, 'hh:mm',5,      TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-09', 'Desinfectante', 'Hipoclorito sódico' ,TiposInd.Texto, '',  1,  TiposGrupo.agua, '' , new Date()),
        new Indicador('ind-10', 'Observaciones', '...' ,        TiposInd.Texto, '',  1,         TiposGrupo.obs, '' , new Date()),
    ],

    grupos: [
        new Grupo('gru-01', 'Datos Ambientales'),
        new Grupo('gru-02', 'Datos del Agua'),
        new Grupo('gru-03', 'Observaciones'),

    ],

    observaciones: '',

    titulo: 'Hospital de XXX',

    fecha: new Date(),

    dark: true,
};


const initStore = () => {
    
    console.log('Store inicializado (:-)');

}

const getIndicadores = () => {

    return [...state.indicadores];

}

const getGrupos = () => {
    
    return [...state.grupos];

}

const getTitulo = () => {
    
    return state.titulo;

}


/**
 * 
 * @param {String} id del indicador
 * @returns {Indicador} 
 */
const getIndicadorById = ( idInd ) => {
    if (!idInd)   
        throw new Error ('Store (getStoreIndbyId): se requiere el Id del indicador'); 

    let indicador = state.indicadores.find( (ind) => ind.id === idInd);
    if (!indicador)
        throw new Error ('Store (getStoreIndbyId): No hay indicador con ese id'); 

    return indicador;
}



/**
 * 
 * @param {Indicador} id 
 * @param {Number} paso 
 */
const actualizaValor = ( id, paso) => {
    if (!id) throw new Error ('Store (actualizaValor): El indicador es necesario');
    if (paso && typeof (paso) != 'number') throw new Error ('Store (actualizaValor): El paso debe ser númerico');
    // obtenemos el indicador   
    let indicador = state.indicadores.find( (ind) => ind.id === id)

    if (!paso || typeof (paso) != 'number') { paso = indicador.paso}

    switch (indicador.tipo) {
        case TiposInd.Numero:
            if(typeof(indicador.valor) != 'number') 
                throw new Error('Método de Store (actualizaValor): El valor debe ser un número si el tipo es número');

                indicador.valor = indicador.valor*1 + paso
                indicador.updateAt = new Date();

            break;
        
        case TiposInd.Horas:

            // sacar la hora y los minutos del string
            let horaMinuto = indicador.valor.split(':');
            if(horaMinuto.length != 2) // si solo hay un digito, no hay separación
                throw new Error('Método de Store (actualizaValor): Si es tipo hora, el valor debe contener :');

                // convertimos todo a minutos
                let minutos = Number(horaMinuto[0])*60 + Number(horaMinuto[1]);
                // sumamos/restamos los minutos pasados a la función
                minutos = minutos + paso*1;
                // comprobrmos limites
                if (minutos <=0) minutos = 0;
                if (minutos >=5999) minutos = 5999;
                
                // convertimos a formato HH:MM
                let horas = Math.trunc(minutos/60);
                let minutosNuevos = minutos % 60;
                

                indicador.valor = ("0" + horas.toString()).slice(-2)+ ":" + 
                                    ("0" + minutosNuevos.toString()).slice(-2);
                indicador.updateAt = new Date();
                                    

            break;
            
    
        default:
            break;
    }

    return;
}

const onIndicadorChanged = () => {
    throw new Error ('No implementado');

}


const reloadPage = () => {
    throw new Error ('No implementado');
}




export default {
    actualizaValor,
    getIndicadorById,
    getIndicadores,
    getGrupos,
    getTitulo,
    initStore,
    onIndicadorChanged,
    reloadPage,

    TiposGrupo, 
    TiposInd,

    // getIndicadores: () => [...state.indicadores ],   
}