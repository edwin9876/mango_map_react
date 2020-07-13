import React from 'react'
import {NavLink} from 'react-router-dom'
import homeIC from '../../Icons/homeIC.png'
import mapIC from '../../Icons/mapIC.png'
import blogIC from '../../Icons/blogIC.png'
import chatIC from '../../Icons/chatIC.png'
import profileIC from '../../Icons/profileIC.png'

const Navbar = (props) => {
    return (
        <div className="d-flex sticky justify-content-center align-content-center " id="toolbar">

            <NavLink exact to="/"><img className="toolbar_icons icons20" id="home_icon" src={homeIC} alt="homeicon" /></NavLink>
            <NavLink to="/blog"><img className="toolbar_icons icons20" id="blog_icon" src={blogIC} alt="blogicon" /></NavLink>
            <NavLink to="/map"><img className="toolbar_icons icons20" id="map_icon" src={mapIC} alt="mapicon" /></NavLink>
            <NavLink to="/chat"><img className="toolbar_icons icons20"  id="chat_icon" src={chatIC} alt="chaticon" /></NavLink>
            <NavLink to="/profile"><img className="toolbar_icons icons20" id="profile_icon" src={profileIC} alt="profileicon" /></NavLink>

        </div>
    )
}

export default Navbar