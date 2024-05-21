import { TiposInd } from "../../store/indicador.store";
import { Indicador } from "../models/indicador.model";
import { formatearFecha, FormatosFecha } from "./formatear-fecha";
import { selectClaseCSSTarjetaByGrupo, selectClaseCSSByTipo } from "./select-clasesCSS";




/**
 * 
 * @param {Indicador} indicador 
 */
export const createCardHTML = ( indicador ) => {
    if (!indicador) throw new Error('Un objeto tipo indicador es requerido');

    // formatear la fecha de actualización
    const fechaActualizacion = formatearFecha(indicador.updateAt, FormatosFecha.prueba);

    // seleccionar las clases en función del grupo y tipo del indicador
    const claseCSSborde = selectClaseCSSTarjetaByGrupo(indicador.grupo);
    const claseCSSspan = selectClaseCSSByTipo (indicador.tipo)
    const claseFondoCard = 'fondo-card-dark'
    
    let html = 
    `<!-- Datos del indicador ${ indicador.id }-->

    <div class="${ claseCSSspan[1] } "> 
        <span id="valor-${ indicador.id }" data-id="ind-XX" class="${ claseCSSspan[0] } fte-color-dark">
            ${ indicador.valor}                             
        </span>
    </div>

    <div class="div-ind-nombre fondo-nombre-dark" > 
        <span id="nombre-${ indicador.id }" class="nombre-indicador fte-color-nombre-cl">    
        ${ indicador.nombre }
        <small>(${ indicador.magnitud })</small>
        </span>
    </div>

    <div class="div-ind-fecha "> 
        <span class="valor-fechaAct fte-color-aviso">
            ${ fechaActualizacion }
        </span>
    </div>
    `;
    if (indicador.tipo !== TiposInd.Texto) {
        html = html + `
        <div class="div-boton-izda "> 
            <button id="btnMas-${ indicador.id }" name="btn-${ indicador.id }-mas" class="boton-1 ">
                <img src="../assets/icons/icon-flecha-down.svg" alt="+" class = "icono-masmenos" />
            </button>
        </div>
        <div class="div-boton-dcha ">
            <button id="btnMenoss-${ indicador.id }" name="btn-${ indicador.id }-menos" class="boton-1">
                <img src="../assets/icons/icon-flecha-up.svg" alt="-" class = "icono-masmenos" />
            </button>
        </div>  
           
        `;     
    };

    html = html + `<!-- Datos del indicador  ${ indicador.id } FIN-->`

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