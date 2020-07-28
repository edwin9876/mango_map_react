import React, { Component } from 'react'
import TripSummary from '../UI/Dashboard/TripSummary'
import GroupSummary from '../UI/Dashboard/GroupSummary'
import PostSummary from '../UI/Dashboard/PostSummary'
import { ThemeContext } from '../../Contexts/Theme'
import { Button } from 'reactstrap';





class ProfileDetails extends Component {
    constructor(props){
        super(props)
    }
    render() {


        let locationsLength
        let chatroomsLength
        let postsLength
        let userName
        let userGender
        if (this.props.locations) {

            locationsLength = this.props.locations.length
            chatroomsLength = this.props.chatrooms.length
            postsLength = this.props.chatrooms.length
            
            userName = this.props.user.user_name
            userGender = this.props.user.gender

        }

        // const numRows = membersToRender.length
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
console.log( this.props.user)
                return (
                    <div className="container noBorder" style={{ background: theme.low }}>

                        <i className="material-icons justify-content-center d-flex micons15 blur">account_circle</i>
                        <h4 className=" bold justify-content-center d-flex">{userName}</h4>
                        <p className="justify-content-center d-flex blur bold">{userGender}</p>


                        <div className="d-flex justify-content-center margin1" >

                            <Button className="margin1 panels center">
                                <h4 className="bold justify-content-center d-flex">{locationsLength}</h4>
                                <p className="justify-content-center d-flex">Trips</p>
                            </Button>

                            <Button className="margin1 panels center">
                                <h4 className="bold justify-content-center d-flex">{chatroomsLength}</h4>
                                <p className="justify-content-center d-flex">Groups</p>
                            </Button>

                            <Button className="margin1 panels center">
                                <h4 className="bold justify-content-center d-flex">{postsLength}</h4>
                                <p className="justify-content-center d-flex">Posts</p>
                            </Button>

                        </div>
                        
                    </div>)
            }}
            </ThemeContext.Consumer>
        )
    }

}


export default ProfileDetails
