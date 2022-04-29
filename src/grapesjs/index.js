import grapesjs from 'grapesjs';

import './index.css';

import { deviceManager } from './managers/deviceManager';
import { blockManager } from './managers/blockManager';
import { styleManager } from './managers/styleManager';
import { panelManager } from './managers/panelManager';

export const initEditor = () => {
  grapesjs.init({
    container: '#gjs',
    locale: "ja", 
    plugins: [],
    // managers
    deviceManager,
    blockManager,
    panelManager,
    styleManager,
  });
};
