import indicadorStore from "../../store/indicador.store";
import { Indicador } from "../models/indicador.model";
// import { selectClaseCSSByGrupo } from "./select-clasesCSS";



/**
 * 
 * @param {Indicador} indicador 
 */
export const createCardHTML = ( indicador ) => {
    if (!indicador) throw new Error('Un objeto tipo indicador es requerido');

    // seleccionar la clase en función del grupo del indicador
    let claseCSS = selectClaseCSSByGrupo (indicador.grupo);
    
    console.log(indicador.grupo, claseCSS);

    const html = 
    `<!-- tarjeta 1.1 ${ indicador.id }-->
        <div id=${ indicador.id } class="card-body">
            <div class="botonera ${ (indicador.tipo == indicadorStore.TiposInd.Texto) ? 'ocultar-elemento' : ''} ">
                <button id="btnMas-${ indicador.id }" name="btn-ind-3-mas" class="btnMas valor-numero boton-1">
                    <img src="../assets/icons/keyboard_arrow_up_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="+"  class = "icono-masmenos" />
                </button>
            </div>
            <div>
                <span
                    data-id="span-valor-${ indicador.id }" 
                    class="${ (indicador.tipo == indicadorStore.TiposInd.Texto) ? 'valor-texto' : 'valor-num'}">
                    ${ indicador.valor}
                </span>
            </div>
            <div class="botonera ${ (indicador.tipo == indicadorStore.TiposInd.Texto) ? 'ocultar-elemento' : ''}">
                <button id="btnMinus${ indicador.id }" name="btn-ind-3-minus" class="btnMinus valor-numero boton-1">
                <img src="../assets/icons/keyboard_arrow_down_40dp_FILL0_wght400_GRAD0_opsz40.svg" alt="-"  class = "icono-masmenos" />
                </button>
            </div>
        </div>
        <div class="card-header">
            <span class="nombre-indicador">
                ${ indicador.nombre }
                <small>(${ indicador.magnitud })</small>
            </span>
        </div>
            <p></p>
    <!-- tarjeta 1.1 ${ indicador.id } FIN-->
    `

    const divElement = document.createElement('Div');
    divElement.setAttribute('data-id', indicador.id);
    divElement.classList.add ('card', claseCSS);
    // divElement.classList.add ('tarjeta-borde-ambiente');
    divElement.innerHTML = html;
    return divElement;

}