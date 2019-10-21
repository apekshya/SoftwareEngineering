// src/components/PrivateRoute.js
// This file provides the ability for the App.js file to only allow
// certain components to be rentered (as a Route) using BrowserRouter
// if the user is logged in
// You will probably not need to modify this file

// standard react components
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from './react-auth0-wrapper';

// this makes a route private, so you must be authenticated to see it
const PrivateRoute = ({ component: Component, path, ...rest }) => {
  // get information from Auth0
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();

  // useEffect is a React thing
  useEffect(() => {
    // if we are already logged in, just return
    if (loading || isAuthenticated) {
      return;
    }
    // otherwise, we need to ask the user to log in again, so use an
    // async function to wait for that action to complete
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  // if we are logged in, render the requested component, otherwise, return a null
  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : null;

  // based on the above, return a route to the correct page
  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
