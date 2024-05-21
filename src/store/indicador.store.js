
import { Indicador } from '../panel/models/indicador.model';
import { Grupo } from '../panel/models/grupo.model';
import { formateaMinutos, formateaHHMMaMin } from '../panel/use-cases';



export const TiposInd = {
    Numero: 'numero',
    Horas: 'hh:mm',
    Texto: 'texto'
};

export const TiposGrupo = {
    ambiente: 'gru01',
    agua: 'gru02',
    obs: 'gru03'
};

const state = {
    indicadores: [
        new Indicador('ind01', 'Temperatura',            24.1,        TiposInd.Numero, 'ºC',    0.1,  TiposGrupo.ambiente, new Date(),'',1 ),
        new Indicador('ind02', 'Humedad relativa',       23.0,        TiposInd.Numero, '%',     0.1,  TiposGrupo.ambiente, new Date(),'',1 ),
        new Indicador('ind03', 'Calidad Aire',          452.0,        TiposInd.Numero, 'ppm',     1,  TiposGrupo.ambiente, new Date(),'Concentración CO2',0),
        new Indicador('ind04', 'Temperatura Agua',       23.0,        TiposInd.Numero, 'ºC',    0.1,  TiposGrupo.agua,     new Date(),'',1 ),
        new Indicador('ind05', 'Cloro Libre Residual',    2.1,        TiposInd.Numero, 'mg/l',  0.1,  TiposGrupo.agua,     new Date(),'',1 ),
        new Indicador('ind06', 'Turbidez',                2.0,        TiposInd.Numero, 'UNF',   0.1,  TiposGrupo.agua,     new Date(),'',1 ),
        new Indicador('ind08', 'Transparencia',           9.0,        TiposInd.Numero, 'x',     0.1,  TiposGrupo.agua,     new Date(),'',1 ),
        new Indicador('ind07', 'Tiempo Recirculación','01:30',        TiposInd.Horas,  'hh:mm',   5,  TiposGrupo.agua,     new Date(),'',0 ),
        new Indicador('ind09', 'Desinfectante', 'Hipoclorito sódico', TiposInd.Texto, '',         1,  TiposGrupo.agua,     new Date(),'' ),
        new Indicador('ind10', 'Observaciones', '...',                TiposInd.Texto, '',         1,  TiposGrupo.obs,      new Date(),'' ),
    ],

    grupos: [
        new Grupo('gru01', 'Datos Ambientales'),
        new Grupo('gru02', 'Datos del Agua'),
        new Grupo('gru03', 'Observaciones'),

    ],

    obs: '',

    titulo: 'Hospital de XXX',

    fecha: new Date(),

    dark: true,
};


// Métodos Generales
/**
 *  Inicializa el Store
 */
const initStore = () => {
    loadStore();
    console.log('Store inicializado 🥝');

}

const loadStore = () => {
   if( !localStorage.getItem('state')) return;


   const { indicadores = [], grupos = [], 
        obs = '', titulo='título', 
        fecha = new Date, dark = true } = JSON.parse( localStorage.getItem('state') );

        state.indicadores = indicadores;
        state.grupos = grupos;
        state.obs = obs;
        state.titulo = titulo;
        state.fecha = new Date(fecha);
        state.dark = dark;

        // recorrer y hacer modificaciones para convertir lo recibido como STRING en FECHA
        state.indicadores.forEach( ind => {
            if (!isNaN(ind.valor))
                ind.valor = parseFloat( ind.valor.toFixed(ind.decimales));
            ind.updateAt = new Date(ind.updateAt);
        });
        
        state.grupos.forEach (grupo =>{
            grupo.updateAt = new Date(grupo.updateAt)
        });
        

}

const saveStateToLS = () => {
    //guardarmos en LocalStore
    localStorage.setItem('state', JSON.stringify( state ) );
}

const reloadPage = () => {
    throw new Error ('No implementado');
}


// Métodos Relacionadas con indicadores
//------------------------------------------------------------------

/**
 *  Devuelve todos los indicadores del store
 *  @returns {Indicador[]} Array con todos los indicadores del store
 */
const getIndicadores = () => {

    return [...state.indicadores];

}

/**
 *  Devuelve indicadores filtrados por el grupo
 * @param {(String|Number)} grupoId Id del grupo 
 * @returns {Indicador[]} Array de indicadores
 */
const getIndicadoresbyGrupo = ( grupoId ) => {
    if (!grupo) 
        return [...state.indicadores];
  
    
    return state.indicadores.filter( indicador => indicador.grupo === grupoId);

}


/**
 *  Devuelve el primer indicador encontrado por ID
 * @param {(String|Number)} idInd id del indicador  
 * @returns {Indicador} indicador (si lo hay)
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
 * Actualiza el valor del indicador sumando/restando al valor almacenado el indicado en el paso
 * En función del tipo de valor (si es numérico o tipo 'hh:mm' aplica la formula correspondiente)
 * 
 * @param {(String|Number)} idInd id del indicador  
 * @param {Number} paso cantidad a variar  (en positivo suma, en negativo resta)
 * @param {Number(-1,1)} factor para sumar (1) o para restar (-1) el paso
 * @returns {String} resultado de la actualización
 */
const actualizaValor = ( id, factor = 1, paso ) => {
    if (!id) throw new Error ('Store (actualizaValor): El id del indicador es necesario');
    if( paso && isNaN(paso*1)) throw new Error ('Store (actualizaValor): El paso debe ser númerico');
    
    // obtenemos el indicador   
    let indicador = getIndicadorById( id );
    
    if (!paso) { paso = indicador.paso}

    // en función del tipo de valor del indicador (numerico, hora o texto)
    switch (indicador.tipo) {
        case TiposInd.Numero:
            if(typeof(indicador.valor) != 'number') 
                throw new Error('Método de Store (actualizaValor): El valor debe ser un número si el tipo es número');
                
                //TODO: OJO¡¡ PROBLEMA CON LA PRECISIÓN DE LOS DECIMALES
                
                let valorNuevo = (indicador.valor) + (paso*factor);
                
                indicador.valor = parseFloat(valorNuevo.toFixed(indicador.decimales));
              
            break;
        
        case TiposInd.Horas:
                // convertimos el formato 'HH:MM' ha minutos
                let minutos = formateaHHMMaMin( indicador.valor )
                minutos = minutos + (paso*factor);
                // comprobrmos limites
                if (minutos <=0) minutos = 0;
                if (minutos >=5999) minutos = 5999;
                
                // convertimos a formato HH:MM y asignamos
                indicador.valor = formateaMinutos( minutos, 'hhmm');                              

            break;
            
    
        default:
            return 'Sin cambios'
    }
    // actualizamos fecha y hora del cambio
    indicador.updateAt = new Date();
    // Guardar cambios al LocalStorage
    //TODO: Valorar si habría que renderizar en pantalla aquí el cambio realizado
    saveStateToLS();
    return indicador;
}


/**
 *  Devuelve el valor 
 * @param {(String|Number)} id id del indicador a obtener el valor
 * @returns {(Number|String|undefined)}
 */
const getValor = ( id ) => {
    if (!id) throw new Error ('(Store) Se requiere un id válido');

    const indicador = state.indicadores.find( (ind) => ind.id === id)

    if (!indicador) throw new Error ('(Store) no hay indicador con ese Id');

    return indicador.valor;
}




const addIndicador = () => {
    throw new Error ('No implementado');


    
}

const deleteIndicador = () => {
    throw new Error ('No implementado');

}

const onIndicadorChanged = () => {
    throw new Error ('No implementado');

}




// Relacionadas con GRUPOS de Indicadores (Containers)

/**
 * 
 * @returns {Grupo[]} Array con los grupos del Store 
 */
const getGrupos = () => {
    
    return [...state.grupos];

}

// Relacionadas con otras variables

/**
 * 
 * @returns {String} el titulo almacenado en el Store
 */
const getTitulo = () => {
    
    return state.titulo;

}







export default {
    actualizaValor,
    addIndicador,
    deleteIndicador,
    getGrupos,
    getIndicadorById,
    getIndicadores,
    getIndicadoresbyGrupo,
    getTitulo,
    getValor,
    initStore,
    loadStore,
    onIndicadorChanged,
    reloadPage,
    saveStateToLS,

    TiposGrupo, 
    TiposInd,

    // getIndicadores: () => [...state.indicadores ],   
}