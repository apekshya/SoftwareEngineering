// src/App.js

// standard react components
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAuth0 } from './react-auth0-wrapper';

// This file provides the PrivateRouter functionality in the Switch below
import PrivateRoute from './PrivateRoute';

// css file and other assets needed
import './App.css';

// bring in other components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import ExternalAPI from './components/ExternalAPI';
import ShowDatabase from './components/ShowDatabase';

// This is the App component, referenced from index.js
const App = () => {
  /* get information from Auth0, pulling in specifically the
   * parts "loading", "isAuthenticated", and "getTokenSilently" */
  const { loading, isAuthenticated, getTokenSilently } = useAuth0();
  if (isAuthenticated) {
    /* TODO:  I think we should remove this eventually.  No need to log the
     * token and allow the user to potentially use if nefariously.
     */
    getTokenSilently().then(token => console.log(token));
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  /* ready to create the HTML for this section (referenced from index.js)
   * Note that JSX comments, inside the return(), must show up
   * inside {} using star-slash style comments */
  return (
    <div className="App">
      {/* The BrowserRouter package gives our Single Page Application the
       * ability to use routes in the URL.
       */}
      <BrowserRouter>
        {/* The NavBar component will be shown in a header, for all pages */}
        <header>
          <NavBar />
        </header>

        {/* Switch will connect the route in the URL to the component
         * This is sort of like the body of the page.  The code below
         * will choose one of the following items to display, depending on the
         * path in the URL.
         */}
        <Switch>
          {/* "Routes" can be accessed whether or not user is logged in */}
          <Route path="/" exact component={Home} />
          {/* PrivateRoutes can only be accessed when logged in,
           * this functionality is provided in the file src/PrivateRoute.js */}
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>

        {/* this area is after the body provided in the Switch,
         * but before the footer, if you want to stick something there */}
        <ExternalAPI />
        <ShowDatabase />

        {/* The Footer component will be shown in a footer, for all pages */}
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
