import React  from "react";
import { NavLink } from 'react-router-dom'




const isLoggedin = () => {

}


const Navbar = (props) => {
    return (
        <div className="d-flex sticky justify-content-center align-content-center " id="toolbar">

            <NavLink exact to="/"><i className="toolbar_icons micons1 material-icons" id="home_icon">home</i></NavLink>
            <NavLink to="/blog"><i className="toolbar_icons micons1 material-icons" id="blog_icon">toc</i></NavLink>
            <NavLink to="/blog/new"><i className="toolbar_icons micons1 material-icons" id="map_icon">add_circle_outline
</i></NavLink>
            <NavLink to="/chat"><i className="toolbar_icons micons1 material-icons" id="chat_icon">mail_outline</i></NavLink>
            <NavLink to="/profile"><i className="toolbar_icons micons1 material-icons" id="chat_icon">perm_identity</i></NavLink>

        </div>
    )
}

export default Navbar