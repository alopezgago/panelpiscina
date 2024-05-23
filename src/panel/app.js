
import html from './presentaciones/app.html?raw';
import { Indicador } from './models/indicador.model';
import { esNum, formateaMinutos, FormatosMinutos, renderCabecera, renderDivGrupos, renderValor, validarEsNumeroRE, validaTeclaNumero } from './use-cases/index';
import panelStore from '../store/indicador.store';



const ElementsID = {
    panel: '.panel',
    contenedorCards: '.container',
    spanValor: 'span-valor-',
    botones: '.boton-1',
    botonesMas: '.btnMas',
    divValorNum: '.divValor-numero',  // divs donde se escribre el nombre del indicador

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
        const divValorN = document.querySelectorAll( ElementsID.divValorNum );




        // Añadir Listeners una vez renderizado el html
        
            //listener a los botones + y -
        btnTodos.forEach( btn => {
            
            
            btn.addEventListener( 'click', ( event ) =>{
                const btnMasoMenos = btn.getAttribute('class');
                const idInd = btn.getAttribute('data-id');

                renderValor( idInd, 
                    panelStore.incrementaValor(idInd,(btn.classList.contains("btnMas")) ? 1 : -1 
                     ))
                
            })
        });
            //listener a los DIV con los valores 
            // para analizar cambios y permitir solo correcto
        divValorN.forEach( div => {

            let idInd;
            let valorPrevio;
            let valorAux = '';


            div.addEventListener( 'click', ( event ) => {
                //al hacer click, marcamos el div como editable
                // div.setAttribute('contenteditable', 'true');

            });

            div.addEventListener( 'focusin', ( event ) => {

                idInd = div.getAttribute('data-id');
                //TODO: coger el valor del store, no del elemento HTML
                valorPrevio = div.textContent.trim();
                
                console.log('Hola:', idInd, 'Valor Previo:', valorPrevio );
                
            });

            div.addEventListener( 'input', ( event ) => {
                
                // validamos el contenido que vaya de acuerdo al regEx establecido
                let esValido = validarEsNumeroRE( div.textContent.trim(),'nnn.nn');
                console.log(esValido, 'cambio', div.textContent.trim());
                if (esValido) {
                    div.classList.remove('valor-novalido');
                } else {
                    div.classList.add('valor-novalido');
                    // div.textContent = valorPrevio;
                }
   
                
            });

          
            div.addEventListener( 'keydown', ( event ) =>{
                if (event.isComposing || event.keyCode === 229) {
                    return;
                  }
                console.log('divtextcontent:',div.textContent.trim());
                console.log('divInner:',div.innerHTML.trim());

                  //Validamos que solo sean teclas numéricas, especiales y .
                if (!validaTeclaNumero( event.key, div.textContent.trim())) {
                    console.log('telca', div.textContent.trim());
                    event.preventDefault();
                }
                
            });

            div.addEventListener( 'blur', ( event ) =>{
                // al perder el foco, dejar de ser editable
                // div.setAttribute('contenteditable', 'false');
                const esValido = validarEsNumeroRE( div.textContent.trim(),'nnn.nn');

                if (esValido) {
                    console.log(esValido, div.textContent.trim() );
                    div.classList.remove('valor-novalido');
                } else {
                    div.classList.add('valor-novalido');
                    // div.textContent = valorPrevio;
                    div.focus();
                }

                   //TODO: Si es válido y ha cambiado el valor -> guardar el nuevo valor en STORE. En otro caso, volver al valor anterior

            });


        });

        

        

        
}



    