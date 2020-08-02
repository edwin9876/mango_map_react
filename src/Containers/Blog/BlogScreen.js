import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'

import SearchBar from '../../Components/UI/Layout/SearchBar'
import WeeklyPost from '../../Components/UI/Dashboard/WeeklyPost'
import WeeklyPic from '../../Components/UI/Dashboard/WeeklyPic'
import TopPics from '../../Components/UI/Dashboard/TopPics'
import TopUsers from '../../Components/UI/Dashboard/TopUsers'
import BlogList from './BlogList'
import PopularSpots from '../../Components/UI/Dashboard/PopularSpots'

import { Button, ButtonGroup } from 'reactstrap'

// import { fetchPost} from '../../redux/actions/blog'
import { fetchAllPost } from '../../redux/actions/blog'
import { fetchAllImages } from '../../redux/actions/image'
import { fetchAllUser } from '../../redux/actions/user'
import { fetchAllLocations } from '../../redux/actions/map'





class ConnectedBlogScreen extends Component {
    static contextType = ThemeContext;



    constructor(props) {
        super(props)
        this.state = {
            showPosts: true,
            showImages: false,
            showUsers: false,
        }
    }
    componentWillUnmount() {
        this.setState({
            showPosts: true,
            showImages: false,
            showUsers: false,
        })

    }

    async componentDidMount() {
        let { dispatch } = this.props
        await dispatch(fetchAllPost())
        await dispatch(fetchAllLocations())
        await dispatch(fetchAllImages())
        await dispatch(fetchAllUser())

        if (this.props.blog.posts
            && this.props.img.images
            && this.props.user.users
            && this.props.map.locations) {
            this.setState({
                ...this.state,
                posts: this.props.blog.posts,
                images: this.props.img.images,
                users: this.props.user.users,
                locations: this.props.map.locations
            })
        }
    }
    filterImg = (e) => {

        const { showImages } = this.state;
        this.setState({
            showPosts: false,
            showImages: !showImages,
            showUsers: false,
        })

    }
    filterUser = (e) => {

        const { showUsers } = this.state;
        this.setState({
            showPosts: false,
            showImages: false,
            showUsers: !showUsers,
        })

    }
    filterPost = (e) => {

        const { showPosts } = this.state;
        this.setState({
            showPosts: !showPosts,
            showImages: false,
            showUsers: false,
        })

    }


    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        console.log(this.state)
        return (

            <div id="blog_container" style={{ background: theme.low, color: theme.high }}>
                <SearchBar />

                <div className="margin5">
                    <p className="d-flex justify-content-center bold gray70 ">Weekly Post</p>
                    {this.state.posts &&
                        <WeeklyPost history={this.props.history} post={this.state.posts[4]} />
                    }
                </div>
                <p className="d-flex justify-content-center bold gray70 ">Weekly Picture</p>
                <div className="margin5">
                    {this.state.images &&
                        <WeeklyPic history={this.props.history} image={this.state.images[3]} />
                    }
                </div>

                <div className="margin5">
                    <p className="d-flex justify-content-center bold gray70">Popular spots</p>
                    {   this.state.locations&& (this.state.locations.length=9) ?
                        this.state.locations.map((location, i ) => { 
                            return <PopularSpots history={this.props.history} location={location} key={i} />
                        }) : <div className="d-flex justify-content-center">No spots yet</div>
                    }
                </div>

                <ButtonGroup className="d-flex justify-content-center">
                    <Button onClick={this.filterPost} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>New Posts</h6></Button>
                    <Button onClick={this.filterImg} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>New Pictures</h6></Button>
                    <Button onClick={this.filterUser} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>Top Users</h6></Button>
                </ButtonGroup>

                <div className="centerH margin5" >
                    {this.state.posts && this.state.showPosts &&
                        this.state.posts.map((post, i) => {
                            return <BlogList history={this.props.history} posts={post} key={i} />
                        })}
                </div>

                <div className="d-flex justify-content-center row margin1">
                    {this.state.images && this.state.showImages &&
                        this.state.images.map((img, i) => {
                            return <TopPics key={i} image={img} />
                        })}
                </div>

                <div className="d-flex justify-content-center margin1">
                    {this.state.users && this.state.showUsers &&
                        this.state.users.map((user, i) => {
                            return <TopUsers key={i} user={user} />
                        })}
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const BlogScreen = connect(mapStateToProps)(ConnectedBlogScreen)

export default BlogScreen