import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { connect } from 'react-redux'

import ProfileDetails from './ProfileDetails'
import TripSummary from '../../Components/UI/Dashboard/TripSummary'
import GroupSummary from '../../Components/UI/Dashboard/GroupSummary'
import PostSummary from '../../Components/UI/Dashboard/PostSummary'
import FavPostSummary from '../../Components/UI/Dashboard/FavPostSummary'

import { fetchUser } from '../../redux/actions/user'

// will render signin component if user is not logged in. Still make the route to '/signin' for signin page though

class ConnectedProfileScreen extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            showLocations: true,
            showChatrooms: false,
            showPosts: false,
            showFav:false


        }
    }

    componentWillUnmount() {
        this.setState({
            user: [],
            showLocations: true,
            showChatrooms: false,
            showPosts: false,
            showFav:false

        })
    }

    async componentDidMount() {
        let { dispatch } = this.props
        let user_id = parseInt(this.props.auth.user.id)
        console.log(this.props)
        console.log(user_id)

        await dispatch(fetchUser(user_id))

        if (this.props.user.user) {
            console.log(this.props.user.user)

            this.setState({
                user: this.props.user.user,
                locations: this.props.user.user.locations,
                chatrooms: this.props.user.user.chatrooms,
                posts: this.props.user.user.userBlogs,
                favPosts: this.props.user.user.favBlogs,
            })
            console.log(this.state)
        }
    }

    filterLoc = (e) => {

        const { showLocations } = this.state;
        this.setState({ 
            showLocations: !showLocations,
            showChatrooms: false,
            showPosts: false,
            showFav:false
        })

    }
    filterCha = (e) => {

        const { showChatrooms } = this.state;
        this.setState({ 
            showChatrooms: !showChatrooms,
            showLocations: false,
            showPosts:false,
            showFav:false
        })

    }
    filterPos = (e) => {

        const { showPosts } = this.state;
        this.setState({ 
            showPosts: !showPosts,
            showChatrooms: false,
            showLocations:false,
            showFav:false
        })

    }

    filterFav = (e) => {

        const { showFav } = this.state;
        this.setState({ 
            showFav: !showFav,
            showPosts: false,
            showChatrooms: false,
            showLocations:false,
        })

    }
    render() {

        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div id="profile_container" style={{ background: theme.low, color: theme.high }}>


                <ProfileDetails
                    filterLoc={this.filterLoc}
                    filterCha={this.filterCha}
                    filterPos={this.filterPos}
                    filterFav={this.filterFav}
                    user={this.state.user}
                    locations={this.state.locations}
                    chatrooms={this.state.chatrooms}
                    posts={this.state.posts}
                    favPosts={this.state.favPosts} />

                {this.state.locations && this.state.showLocations ?
                    this.state.locations.map((item, i) => {
                        return <TripSummary history={this.props.history} location={item} key={i} />
                    }) : null
                }
                {this.state.chatrooms && this.state.showChatrooms ?
                    this.state.chatrooms.map((item, i) => {
                        return <GroupSummary history={this.props.history} chatroom={item} key={i} />
                    }) : null
                }

                {this.state.posts && this.state.showPosts ?
                    this.state.posts.map((item, i) => {
                        return <PostSummary history={this.props.history} posts={item} key={i} />
                    }) : null
                }

                {this.state.favPosts && this.state.showFav ?
                    this.state.favPosts.map((item, i) => {
                        return <FavPostSummary history={this.props.history} favPosts={item} key={i} />
                    }) : null
                }




            </div>

        )
    }
}

        

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const ProfileScreen = connect(mapStateToProps)(ConnectedProfileScreen);

export default ProfileScreen;
