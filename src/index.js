import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Montserrat', 'Shrikhand']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root')
);
