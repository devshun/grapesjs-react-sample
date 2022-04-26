import grapesjs from 'grapesjs';

import './index.css';

import { deviceManager } from './managers/deviceManager';
import { blockManager } from './managers/blockManager';

export const initEditor = () => {
  const editor = grapesjs.init({
    container: '#gjs',
    plugins: [],
    deviceManager: deviceManager,
    blockManager: blockManager,
  });
};
