// src/components/Home.js

// standard imports
import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';
import './Home.css';

// the Home component
const Home = () => {
  /* Auth0 stuff, to customize the view, depending on if the user is logged
   * in (isAuthenticated = true) or not (=false) */
  const { isAuthenticated, getTokenSilently } = useAuth0();

  // this is the JSX (HTML) returned to be displayed on the page by App.js
  return (
    <div className="Home">
      <h2>Home</h2>

      {/* if we are not logged in, display this text */}
      {isAuthenticated === false && <span>Please login to continue.</span>}

      {/* if we are logged in, show this text */}
      {isAuthenticated && (
        <span>Welcome to The Proof of Concept Auth App </span>
      )}
    </div>
  );
};

export default Home;
