import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store';
import listenForEvents from './listen-for-events';

const root = document.getElementById('container');

const renderApp = () => {
  const App = require('./containers/app').default; // eslint-disable-line global-require

  render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    root
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    unmountComponentAtNode(root);
    renderApp();
  });
}

listenForEvents();
