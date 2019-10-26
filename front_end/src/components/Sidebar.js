import React, { Component } from 'react'
import UserInfo from './UserInfo'
import RoomList from './RoomList';

const Sidebar = ({user, signOut, rooms, setCurrentRoom, showRoomForm }) => {
        return(
            <aside
            className="Sidebar"
            style={styles.sidebar}
          >
           <UserInfo user={user} signOut={signOut}/>
            <h1 style={styles.h1}>XTBC 18</h1>
            <RoomList rooms={rooms} 
                      setCurrentRoom={setCurrentRoom}
                      showRoomForm={showRoomForm}
            />
          </aside>
        )
    }

const styles = {
    sidebar: {
        backgroundColor: 'PaleTurquoise',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
      },
      
      children: {
        padding: '0 1rem',
      },
      
      h1: {
        backgroundColor: 'PaleTurquoise',
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
      }
}

export default Sidebar