// src/components/Profile.js

// standard react components
import React from 'react';
import { useAuth0 } from '../react-auth0-wrapper';

// css for the Profile component
import './Profile.css';

// this is the Profile component
const Profile = () => {
  // bring in the Auth0 stuff we need
  const { loading, user } = useAuth0();

  // if Auth0 tells us it is loading, or if we don't get a user object
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  // ready to render the information from the user object
  return (
    <div className="Profile">
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.nickname}</p>

      <p> The JSON user information contains: </p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </div>
  );
};

export default Profile;
