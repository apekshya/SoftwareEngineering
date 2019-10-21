// src/index.js

// standard react components
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import Auth0 libraries and configuration
import { Auth0Provider } from './react-auth0-wrapper';
import config from './auth_config.json';

// import the main component here
import App from './App';

// A function that routes the user to the right place after login
// Should not need to be modified, and yes there is a ternerary operator there
// I think this is default to react
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// Fill the div that is found in index.html here
// Also, we control access to the page through Auth0
// Unless you add a div to the index.html file, you should not need to
// make any changes here.
ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={config.audience}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// Standard React: for now, we should not need to change this
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
