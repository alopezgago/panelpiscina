
import html from './presentaciones/app.html?raw';
import { Indicador } from './models/indicador.model';
import { formateaMinutos, FormatosMinutos, renderCabecera, renderDivGrupos, renderSpanValor } from './use-cases/index';
import panelStore from '../store/indicador.store';



const ElementsID = {
    panel: '.panel',
    contenedorCards: '.container',
    spanValor: 'span-valor-',
    botones: '.boton-1',
    botonesMas: '.btnMas',

}

/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

    const displayCabecera = () => {

        const titulo = panelStore.getTitulo();
        renderCabecera( titulo , new Date());
    }

    const displayGrupos = () => {

        const grupos = panelStore.getGrupos(); // todos los grupos
        const indicadores = panelStore.getIndicadores(); // todos los indicadores

        renderDivGrupos ( ElementsID.panel, grupos, indicadores);        
    }
    
    // Cuando la función App() se llama
    ( ()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );   


        displayCabecera();
        displayGrupos();

        
    })();


        // Referencias HTML
        const btnTodos = document.querySelectorAll( ElementsID.botones );
    
        // Añadir Listeners una vez renderizado el html
    
        btnTodos.forEach( btn => {
            
            
            btn.addEventListener( 'click', ( event ) =>{
                const btnMasoMenos = btn.getAttribute('class');
                const idInd = btn.getAttribute('data-id');

                (btn.classList.contains("btnMas")) ? 1 : -1 

                renderSpanValor( idInd, 
                    panelStore.actualizaValor(idInd,(btn.classList.contains("btnMas")) ? 1 : -1 
                     ))
                
            })
        });
        
}



    