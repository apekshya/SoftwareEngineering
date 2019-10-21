// src/components/NavBar.js

// standard react components
import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';
import { Link } from 'react-router-dom';

// css for the NavBar component
import './NavBar.css';

// this is the NavBar component
const NavBar = () => {
  // Auth0 stuff, to customize the view, depending on if the user is logged
  // in (isAuthenticated = true) or not (=false)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // make the Navigation Bar, which will appear at the top of the screen
  // TODO:  This is ugly, definitely need to improve it
  return (
    <div className="NavBar">
      {/* If not logged in, provide a Log in button
       * loginWithRedirect is provided by src/react-auth0-wrapper.js
       */}
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {/* If already logged in, provide a Log out button
       * logout is provided by src/react-auth0-wrapper.js
       */}
      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      {/* Always provide the LoremIpsum and Home links, whether or not any one is logged in */}
      {
        <span>
          <code>Anderson University | Proof of Concept Application</code>
        </span>
      }
      {
        <span>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/loremipsum">Lorem Ipsum</Link>&nbsp;
        </span>
      }

      {/* If already logged in, provide a link to the profile
       */}
      {isAuthenticated && (
        <span>
          <Link to="/profile">Profile</Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;
