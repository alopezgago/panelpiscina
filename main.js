import './style.css';
import { App } from './src/panel/app';
import panelStore from './src/store/indicador.store';

panelStore.initStore();
// console.log(panelStore.getIndicadorById('ind-07'))
panelStore.actualizaValor('ind-07');
// console.log(panelStore.getIndicadorById('ind-07'))
panelStore.actualizaValor('ind-07',-25);
// console.log(panelStore.getIndicadorById('ind-07'))
// panelStore.initStore();

// panelStore.actualizaValor(store.indicadores[1])

App( '#app' );
