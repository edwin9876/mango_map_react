import React, { Component } from 'react'
import TripSummary from '../UI/Dashboard/TripSummary'
import GroupSummary from '../UI/Dashboard/GroupSummary'
import PostSummary from '../UI/Dashboard/PostSummary'
import { ThemeContext } from '../../Contexts/Theme'
import { Button } from 'reactstrap';





class ProfileDetails extends Component {

    render() {

        

        let locationsLength
        let chatroomsLength
        let postsLength = 0 
        let posts

        if (this.props.locations) {
            posts = this.props.locations.map(location=>location.userBlogs).filter(post=>post.length!==0)

            locationsLength = this.props.locations.length
            chatroomsLength = this.props.chatrooms.length
            
            posts.forEach(e=>postsLength+=e.length)
            // let user_chatrooms = this.props.user.chatrooms
            // let user_favblogs = this.props.user.favblogs

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
                        <h4 className=" bold justify-content-center d-flex">{this.props.user.user_name}</h4>
                        <p className="justify-content-center d-flex blur bold">{this.props.user.gender}</p>


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
