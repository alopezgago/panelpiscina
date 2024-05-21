import './style.css';
import { App } from './src/panel/app';
import panelStore from './src/store/indicador.store';

panelStore.initStore();

App( '#app' );
