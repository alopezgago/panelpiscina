

/**
 * 
 * @param {String} centro 
 * @param {Date} fecha 
 */
export const renderCabecera = ( titulo = 'Centro XXX', fecha = new Date) => {

    console.log('Hola cabecera');

    const html = 
    `<!-- Cabecera-->
    
            <div>
            <!-- <img src="./public/icons/fremap_sd_hor_vectorizado.svg" alt="Logo" height="100px"/> -->
            </div>
            <div>
                <h1> [Logo] Panel informativo - Piscina ${ titulo } (En pruebas) </h1>
                <p> ${ fecha.toLocaleDateString( 'es-ES')} </p>
            </div>
        
   
    <!-- Cabecera FIN -->
    `
 
    const headerElement = document.createElement('header');
    headerElement.innerHTML = html;

    const panelElement= document.createElement('Div');
    panelElement.classList.add ('panel');

    const appHTML = document.querySelector('#app');
    appHTML.append(headerElement);
    appHTML.append(panelElement);
}