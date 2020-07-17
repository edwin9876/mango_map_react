import React  from "react";
import { NavLink } from 'react-router-dom'
import homeIC from '../../Icons/homeIC.png'
import mapIC from '../../Icons/mapIC.png'
import blogIC from '../../Icons/blogIC.png'
import chatIC from '../../Icons/chatIC.png'
import profileIC from '../../Icons/profileIC.png'




const isLoggedin = () => {

}


const Navbar = (props) => {
    return (
        <div className="d-flex sticky justify-content-center align-content-center " id="toolbar">

            <NavLink exact to="/"><i className="toolbar_icons micons1 material-icons" id="home_icon">home</i></NavLink>
            <NavLink to="/blog"><i className="toolbar_icons micons1 material-icons" id="blog_icon">toc</i></NavLink>
            <NavLink to="/map"><i className="toolbar_icons micons1 material-icons" id="map_icon">stars</i></NavLink>
            <NavLink to="/chat"><i className="toolbar_icons micons1 material-icons" id="chat_icon">mail_outline</i></NavLink>
            <NavLink to="/profile"><i className="toolbar_icons micons1 material-icons" id="chat_icon">perm_identity</i></NavLink>

        </div>
    )
}

export default Navbar