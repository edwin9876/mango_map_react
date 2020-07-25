import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'

import SearchBar from '../../Components/UI/Layout/SearchBar'
import WeeklyPic from '../../Components/UI/Dashboard/WeeklyPic'
import WeeklyPost from '../../Components/UI/Dashboard/WeeklyPost'
import TopPics from '../../Components/UI/Dashboard/TopPics'
import TopUsers from '../../Components/UI/Dashboard/TopUsers'
import BlogList from '../../Components/Blog/BlogList'

import { Button, ButtonGroup } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        post: state.blog.post,
        posts: state.blog.posts,
        pictures: state.blog.images,
        users: state.user.users
    }
}

class BlogScreen extends Component {
    static contextType = ThemeContext;

    // constructior(props) {
    //     super(props);
    //     state = {
    //         currentRendering: <BlogList />
    //     };

    //     toBlogList = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <BlogList /> });
    //     };
    //     toPicList = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <TopPics /> });
    //     };
    //     toUsers = () => {
    //         // Change to immutable setState
    //         this.setState({ ...this.state, currentRendering: <TopUsers /> });
    //     };


        render() {
            const {isLightTheme, light, dark} = this.context;
            const theme = isLightTheme ? light : dark;

            return (

                <div id="blog_container" style={{ background: theme.low, color : theme.high}}>
                    <SearchBar />
                    <WeeklyPost post={this.props.post} />
                    {/* <WeeklyPic /> */}

                    <ButtonGroup className="d-flex justify-content-center">
                    <Button style={{ background: theme.low, color : theme.high, borderColor: theme.low}}>New Posts</Button>
                    <Button style={{ background: theme.low, color : theme.high,  borderColor: theme.low}}>New Pictures</Button>
                    <Button  style={{ background: theme.low, color : theme.high,  borderColor: theme.low}}>Top Users</Button>
                  </ButtonGroup>


                    {/* <BlogList posts={this.props.posts} /> */}
                    {/* <TopPics pictures={this.props.pictures} /> */}
                    <TopUsers users={this.props.users} />
                </div>
            )
        }
    }



export default connect(mapStateToProps)(BlogScreen)