import React from 'react'
import homeIC from '../../Icons/homeIC.png'
import mapIC from '../../Icons/mapIC.png'
import blogIC from '../../Icons/blogIC.png'
import chatIC from '../../Icons/chatIC.png'
import profileIC from '../../Icons/profileIC.png'

const Navbar = (props) => {
    return (
        <div className="sticky row justify-content-center align-content-center" id="toolbar">

            <img className="toolbar_icons col-2 icons15 active" id="home_icon" src={homeIC} alt="homeicon" />
            <img className="toolbar_icons col-2 icons15" id="map_icon" src={mapIC} alt="mapicon" />
            <img className="toolbar_icons col-2 icons15" id="blog_icon" src={blogIC} alt="blogicon" />
            <img className="toolbar_icons col-2 icons15" id="chat_icon" src={chatIC} alt="chaticon" />
            <img className="toolbar_icons col-2 icons15" id="profile_icon" src={profileIC} alt="profileicon" />

        </div>
    )
}

export default Navbar