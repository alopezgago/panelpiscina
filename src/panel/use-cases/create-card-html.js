import { TiposInd } from "../../store/indicador.store";
import { Indicador } from "../models/indicador.model";
import { selectClaseCSSBordeCardByGrupo, 
    selectClaseCSSByTipo, selectClaseCSSTemaDark, formateaFecha, FFecha, 
    formateaDecValor} from "./index";




/**
 * 
 * @param {Indicador} indicador 
 * @returns {String} contenido HTML para añadir a un elementHTML
 */
export const createCardHTML = ( indicador ) => {
    if (!indicador) throw new Error('Un objeto tipo indicador es requerido');

    //TODO: revisar el tema de las fechas
    //TODO: Optimizar DOM
    //formatear valor

    // formatear la fecha de actualización
    // const fechaActualizacion = indicador.updateAt;
    const fechaAct = formateaFecha( new Date(indicador.updateAt), 
                        FFecha.fyhLocalCorta);
    
    
    // seleccionar las clases en función del grupo y tipo del indicador
    const claseCSSborde = selectClaseCSSBordeCardByGrupo(indicador.grupo);
    const claseFondoCard = selectClaseCSSTemaDark( true );
    
    let html = '';

    if (indicador.tipo !== TiposInd.Texto) { // si no tipo Texto (va con botones)
    html = 
     `
    <div contenteditable="true"
        id="valor-${ indicador.id }" 
        data-id="${ indicador.id }" 
        data-value="${ indicador.valor }" 
        class="div-ind-num-valor format-ind-valor divValor-${ indicador.tipo }" 
        pattern='([0-9.,\-]*\.)?[0-9]+).*/g'
    >         
          ${ indicador.valor }
      
    </div>

    <div id="nombre-${ indicador.id }"  
         data-id="${ indicador.id }"
         class="div-ind-nombre format-ind-nombre tema-oscuro"  
    >
        ${ indicador.nombre }
        <small>(${ indicador.magnitud })</small>
        <br>    
        <small>${ indicador.detalle }</small>
        
    </div>

    <div id="fechaAct-${ indicador.id }" 
        class="div-ind-fecha valor-fechaAct fte-color-aviso"
    > 
         ${ fechaAct }
    </div>
    <div class="div-boton-izda "> 
        <button id="btnMas_${ indicador.id }" data-id="${ indicador.id }" name="${ indicador.id }-mas" class="btnMas boton-1">
        +
        </button>
    </div>
    <div class="div-boton-dcha ">
        <button id="btnMenos_${ indicador.id }" data-id="${ indicador.id }" name="${ indicador.id }-menos" class=" btnMenos boton-1">
        -
        </button>
    </div>  
    `;
        // <img src="../assets/icons/icon-flecha-down.svg" alt="+" class = "icono-masmenos" />
        // <img src="../assets/icons/icon-flecha-up.svg" alt="-" class = "icono-masmenos" />
    } else { // si es tipo texto (sin botones y con input)
        html = 
        `
        <div class="div-ind-txt-valor "> 
            <input  
                data-id="${ indicador.id }" 
                type="text" 
                class="input-obs2" 
                value="${ indicador.valor }" 
                />
        </div>   
        <div id="nombre-${ indicador.id }"  
            data-id="${ indicador.id }"
            class="div-ind-nombre format-ind-nombre tema-oscuro"  
        >
            ${ indicador.nombre }
            <small>${ indicador.magnitud }</small>
            <br>    
            <small>${ indicador.detalle }</small>
        </div>

        <div 
            class="div-ind-fecha fte-color-aviso" 
            id="fechaAct-${ indicador.id }" 
        >
                ${ fechaAct }
        </div>
        `;

    };
    

    // La tarjeta del indicador tiene 2 DIVs para combinar un FLEX y un GRID
    // creamos el primer DIV item que contendra el GRID de la tarjeta del indicador
    let divElement1 = document.createElement('Div');
    divElement1.setAttribute('data-id', indicador.id);
    divElement1.classList.add ('card', 'flex-card', claseFondoCard, claseCSSborde);
    // La clase 'card' que aplica las caracteristicas Flexbox HIJO del container de GRUPO
    // La clase 'flex-card' que aplica las caracteristicas Flexbox PADRE del Grid de las cards
    // la clase 'claseCSSborde' le pone un borde de un color distinto en función del grupo

    //creamos el segundo DIV item que contendra el GRID de la tarjeta del indicador
    const divElement2 = document.createElement('Div');
    divElement2.classList.add ('grid-tarjeta', 'flex-tarjeta-item');

    // La clase 'grid-tarjeta' define el GRID (3 filas y 3 columnas) para situar los datos
    // La clase ' flex-tarjeta-item' tiene las caracteristicas de los HIJOS del Flexbox creado antes
    
    // Añadimos el contenido de la tarjeta
    divElement2.innerHTML = html;

    divElement1.append( divElement2 );
    return divElement1;

}