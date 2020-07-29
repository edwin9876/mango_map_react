import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'

import SearchBar from '../../Components/UI/Layout/SearchBar'
import WeeklyPic from '../../Components/UI/Dashboard/WeeklyPic'
import WeeklyPost from '../../Components/UI/Dashboard/WeeklyPost'
import TopPics from '../../Components/UI/Dashboard/TopPics'
import TopUsers from '../../Components/UI/Dashboard/TopUsers'
import BlogList from '../../Components/Blog/BlogList'

// import{fetchAllPost} from '../../redux/actions/blog'

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
    state = {
        buttonId: null
    }

    handleRender = (id) => {
        this.setState({ buttonId: id });
    }

    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (

            <div id="blog_container" style={{ background: theme.low, color: theme.high }}>
                <SearchBar />
                <WeeklyPost post={this.props.post} />
                {/* <WeeklyPic />*/}

                <ButtonGroup className="d-flex justify-content-center">
                    <Button onClick={() => this.handleRender(1)} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>New Posts</h6></Button>
                    <Button onClick={() => this.handleRender(2)} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>New Pictures</h6></Button>
                    <Button onClick={() => this.handleRender(3)} style={{ background: theme.low, color: theme.highlight, borderColor: theme.low }}><h6>Top Users</h6></Button>
                </ButtonGroup>

                <div className="d-flex justify-content-center ">
                    {this.state.buttonId === 1 && <BlogList posts={this.props.posts} />}
                    {this.state.buttonId === 2 && <TopPics pictures={this.props.pictures} />}
                    {this.state.buttonId === 3 && <TopUsers users={this.props.users} />}
                    {this.state.buttonId !== 1 && this.state.buttonId !== 2 && this.state.buttonId !== 3 && <BlogList posts={this.props.posts} />}

                </div>
            </div>
        )
    }
}



export default connect(mapStateToProps)(BlogScreen)