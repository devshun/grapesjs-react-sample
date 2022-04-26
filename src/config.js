import grapesjs from 'grapesjs';

import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';

export const initEditor = () => {
  const editor = grapesjs.init({
    container: '#gjs',
    plugins: ['grapesjs-navbar'],
    plugins: ['grapesjs-style-bg'],
    pluginsOpts: {
      'grapesjs-style-bg': 'white',
    },
  });

  const panelManager = editor.Panels;
  const styleManager = editor.Styles;

  const canvas = editor.Canvas;

  panelManager.addPanel({
    id: 'myNewPanel',
    visible: true,

    buttons: [
      {
        //ボタンのデザインや属性を設定
        id: 'smile',
        className: 'fa fa-smile-o',
        attributes: { title: 'Smile' },
        command: 'helloWorld',
      },
    ],
  });

  const commands = editor.Commands;

  editor.addStyle('.gjs-pn-panel gjs-pn-commands gjs-one-bg gjs-two-color{background-color: red}');

  commands.add('helloWorld', {
    run: function (editor, sender) {
      console.log(canvas.getBody());
      alert(canvas.getBody());
    },
  });

  const blockManager = editor.BlockManager;

  blockManager.add('h1-block', {
    label: 'Heading',
    content: '<h1>ここにテキストを入力…</h1>',
    attributes: {
      title: 'h1ブロックの挿入',
    },
  });
};
