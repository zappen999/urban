import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/app';

import store from 'flux/store';

// import routes from 'routes';
import config from '../config';

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementsByClassName(config.MOUNTING_POINT)[0]
);

if (module.hot) {
  module.hot.accept();
}
