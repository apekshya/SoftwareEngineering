import React, { Component } from 'react'
import Profile from "./Profile";

const Avatar = ({user, style}) => {
    const imageUrl = Profile.picture || `https://api.adorable.io/avatars/40/${Profile.email}.png`

    return(
        <div 
            className="Avatar"
            style={{
                ...styles,
                ...style,
                background: `url(${imageUrl})`,
            }}
        ></div>
    )
}

const styles = {
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        marginRight: '0.5rem',
        backgroundSize: '40px 40px',
}

export default Avatar