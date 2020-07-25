import React, { Component } from 'react'
// import SignIn from '../../Components/Auth/SignIn'
import ProfileDetails from '../../Components/Profile/ProfileDetails'
import { ThemeContext } from '../../Contexts/Theme'

// will render signin component if user is not logged in. Still make the route to '/signin' for signin page though

export default class ProfileScreen extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        };
    }


    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        // const isLoggedIn = this.state.isLoggedIn;
        // const id = this.state.id
        return (
            <div id="profile_container" style={{ background: theme.low, color : theme.high}}>
           
          
                <ProfileDetails />


            </div>
        )
    }
}
