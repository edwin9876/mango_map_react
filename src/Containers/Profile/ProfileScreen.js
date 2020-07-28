import React, { Component } from 'react'
// import SignIn from '../../Components/Auth/SignIn'
import TripSummary from '../../Components/UI/Dashboard/TripSummary'
import GroupSummary from '../../Components/UI/Dashboard/GroupSummary'
import PostSummary from '../../Components/UI/Dashboard/PostSummary'
import ProfileDetails from '../../Components/Profile/ProfileDetails'
import { ThemeContext } from '../../Contexts/Theme'
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/actions/user'

// will render signin component if user is not logged in. Still make the route to '/signin' for signin page though


class ConnectedProfileScreen extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    async componentDidMount() {
        let { dispatch } = this.props
        let user_id = parseInt(this.props.auth.user.id)
        console.log(user_id)
        if (this.state.user.length == 0) {
            await dispatch(fetchUser(user_id))
        }

        if (this.props.user.user) {
            console.log(this.props.user.user)

            this.setState({
                user: this.props.user.user,
                locations: this.props.user.user.locations,
                chatrooms: this.props.user.user.chatrooms,
                posts: this.props.user.user.locations.map(location => location.userBlogs).filter(post => post.length !== 0)
            })
        }
    }


    componentWillUnmount(){
        this.setState({
            user:[]
        })
    }
    
    render() {
        console.log(this.state.posts)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        // const isLoggedIn = this.state.isLoggedIn;
        // const id = this.state.id
        return (
            <div id="profile_container" style={{ background: theme.low, color: theme.high }}>


                <ProfileDetails user={this.state.user} locations={this.state.locations} chatrooms={this.state.chatrooms} posts={this.state.posts} />
                {(this.state.locations) ?
                    this.state.locations.map((item,i) => {
                        return <TripSummary location={item} key={i} />
                    }) : null
                }
                {(this.state.chatrooms) ?
                    this.state.chatrooms.map((item,i) => {
                        return <GroupSummary chatroom={item} key={i} />
                    }) : null
                }
                
                {(this.state.posts) ?
                    this.state.posts.map((item,i) => {
                        return <PostSummary posts={item} key={i}/>
                    }) : null
                }


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

let ProfileScreen = connect(mapStateToProps)(ConnectedProfileScreen)


export default ProfileScreen