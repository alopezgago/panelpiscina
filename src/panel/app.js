
import html from './presentaciones/app.html?raw';
import { Indicador } from './models/indicador.model';
import { renderCardIndicadores, renderDivGrupos, renderSpanValor } from './use-cases/index';
import panelStore from '../store/indicador.store';



const ElementIDs = {
    panel: '.panel',
    contenedorCards: '.container',
    spanValor: 'span-valor-',

}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    //Para dibujar los containers que tendrán los grupos de indicadores
    const renderGrupos = () => {
        const grupos = panelStore.getGrupos(); // todos los grupos

        renderDivGrupos ( ElementIDs.panel, grupos);        
    }

    const renderIndicadores = () => {
        const indicadores = panelStore.getIndicadores(); // todos los indicadores
 
        renderCardIndicadores( ElementIDs.contenedorCards, indicadores );

    }

    const renderIndicadoresEnGrupo = () => {
        const indicadores = panelStore.getIndicadores(); // todos los indicadores

        renderCardIndicadores( indicadores );

    }


    const renderValor = ( idIndicador = 'ind-01', valor = 20.1 ) => {
        const indicador = panelStore.getIndicadorById(  idIndicador );
        //obtener el data-id del elemento a partir del id del indicador

        const idSpan = `${ElementIDs.spanValor}${indicador.id}`;

        renderSpanValor( idSpan, valor );


    }
    

    
    
    // Cuando la función App() se llama
    ( ()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );   
        
        renderGrupos();

        renderIndicadoresEnGrupo();
        // renderIndicadores();

        renderValor('ind-03', 15);

        
    })();
    
    
}