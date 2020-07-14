import React, { Component } from 'react'
import SignIn from '../Auth/SignIn'
import ProfileDetails from '../Profile/ProfileDetails'


// will render signin component if user is not logged in. Still make the route to '/signin' for signin page though

export default class ProfileScreen extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        };
    }


    render() {

        const isLoggedIn = this.state.isLoggedIn;
        const id = this.state.id
        return (
            <div>
                {isLoggedIn
                    ? <ProfileDetails />
                    : <SignIn />
                }


            </div>
        )
    }
}
