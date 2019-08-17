// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"


import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
      r360.createRoot('SlideshowSample', {
        photos: [
          {uri: './static_assets/360_world.jpg', title: '360 World', format: '2D'},
            {uri: './static_assets/foto1.jpeg', title: 'san fransicso', format: '2D'},
            {uri: './static_assets/foto2.jpeg', title: 'san fransicso pier', format: '2D'},
          // Add your own 180 / 360 photos to this array,
          // with an associated title and format
        ],
      }),
      r360.getDefaultSurface(),
  );
}

window.React360 = {init};