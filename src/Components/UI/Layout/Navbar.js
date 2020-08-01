import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../../Contexts/Theme'


export default class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        const { dragTheme } = this.context;
        let user_id
        if (localStorage.getItem('user')) {
            user_id = JSON.parse(localStorage.getItem('user')).id
        }
        return (
            <div draggable="true" onDrag={dragTheme} className="sticky d-flex justify-content-center" id="toolbar">

                <NavLink exact to="/"><i className="toolbar_icons micons1 material-icons" id="home_icon">home</i></NavLink>
                <NavLink to="/blog"><i className="toolbar_icons micons1 material-icons" id="blog_icon">toc</i></NavLink>
                {user_id ?
                    <NavLink to="/createpost"><i className="toolbar_icons micons1 material-icons" id="map_icon">add_circle_outline</i></NavLink> :
                    <i className="toolbar_icons micons1 material-icons" id="map_icon">add_circle_outline</i>
                }
                {user_id ?
                    <NavLink to="/chat"><i className="toolbar_icons micons1 material-icons" id="chat_icon">mail_outline</i></NavLink> :
                    <i className="toolbar_icons micons1 material-icons" id="chat_icon">mail_outline</i>
                }
                <NavLink to="/profile"><i className="toolbar_icons micons1 material-icons" id="chat_icon">perm_identity</i></NavLink>

            </div>
        )
    }
}

