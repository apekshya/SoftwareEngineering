import React, { Component } from 'react'
import Avatar from './Avatar'
import SignOut from './SignOut';
import Profile from "./Profile";

const UserInfo = ({user, signOut}) => {
    return(
    <div
              className="UserInfo"
              style={styles.info}
            >
            <Avatar user={user} style={styles.avatar}/>
              <div style={styles.user}>
                {Profile.name}
              </div>
              <SignOut signOut={signOut} />
            </div>
    )
}

const styles = {
    info: {
        padding: '0 1rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
      },
      avatar: {
        marginRight: '0.5rem',
      },
      user: {
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: '1.5rem',
      },
}

export default UserInfo