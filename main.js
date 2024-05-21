import './style.css';
import { App } from './src/panel/app';
import panelStore from './src/store/indicador.store';

panelStore.initStore();
panelStore.actualizaValor('ind-07');
panelStore.actualizaValor('ind-07',-25);

App( '#app' );
