import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeContext } from "../../Contexts/Theme";

import SearchBar from "../../Components/UI/Layout/SearchBar";
import WeeklyPost from "../../Components/UI/Dashboard/WeeklyPost";
import WeeklyPic from "../../Components/UI/Dashboard/WeeklyPic";
import TopPics from "../../Components/UI/Dashboard/TopPics";
import TopUsers from "../../Components/UI/Dashboard/TopUsers";
import BlogList from "./BlogList";
import PopularSpots from "../../Components/UI/Dashboard/PopularSpots";

import { Button, ButtonGroup, Tooltip } from "reactstrap";

// import { fetchPost} from '../../redux/actions/blog'
import { fetchAllPost } from "../../redux/actions/blog";
import { fetchAllImages } from "../../redux/actions/image";
import { fetchAllUser } from "../../redux/actions/user";
import { fetchAllLocations } from "../../redux/actions/map";

class ConnectedBlogScreen extends Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state = {
      showPosts: true,
      showImages: false,
      showUsers: false,
      searchKeyword: [],
      searched: false,
    };
  }
  componentWillUnmount() {
    this.setState({
      showPosts: true,
      showImages: false,
      showUsers: false,
      searchKeyword: [],
      searched: false,
    });
  }

  async componentDidMount() {
    let { dispatch } = this.props;
    await dispatch(fetchAllPost());
    await dispatch(fetchAllLocations());
    await dispatch(fetchAllImages());
    await dispatch(fetchAllUser());

    if (
      this.props.blog.posts &&
      this.props.img.images &&
      this.props.user.users &&
      this.props.map.locations
    ) {
      this.setState({
        ...this.state,
        posts: this.props.blog.posts,
        images: this.props.img.images,
        users: this.props.user.users,
        locations: this.props.map.locations,
      });
    }
  }
  filterImg = (e) => {
    const { showImages } = this.state;
    this.setState({
      ...this.state,
      showPosts: false,
      showImages: !showImages,
      showUsers: false,
    });
  };
  filterUser = (e) => {
    const { showUsers } = this.state;
    this.setState({
      ...this.state,
      showPosts: false,
      showImages: false,
      showUsers: !showUsers,
    });
  };
  filterPost = (e) => {
    const { showPosts } = this.state;
    this.setState({
      ...this.state,
      showPosts: !showPosts,
      showImages: false,
      showUsers: false,
    });
  };

  handleSearch = (e) => {
    this.setState({
      ...this.state,
      searchKeyword: e.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (e) => {
    let keyWord = new RegExp(this.state.searchKeyword, "gi");
    let filteredPosts = [...this.state.posts].filter((post) =>
      post.title.match(keyWord)
    );
    let filteredUsers = [...this.state.users].filter((user) =>
      user.user_name.match(keyWord)
    );
    this.setState({
      ...this.state,
      searched: true,
      filteredPosts: filteredPosts,
      filteredUsers: filteredUsers,
    });
    console.log(this.state);
  };

  handleCancel = (e) => {
    this.setState({
      searched: false,
      searchKeyword: [],
    });
  };

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    console.log(this.state);
    return (
      <div
        id="blog_container"
        style={{ background: theme.low, color: theme.high }}
      >
        <SearchBar
          value={this.state.searchKeyword}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearch}
        />
        {!this.state.searched && (
          <div>
            <div className="margin5">
              <p className="d-flex justify-content-center bold gray70">
                Weekly Post
              </p>
              {this.state.posts && (
                <WeeklyPost
                  history={this.props.history}
                  post={this.state.posts[0]}
                />
              )}
            </div>
            <p className="d-flex justify-content-center bold gray70 ">
              Weekly Picture
            </p>
            <div className="margin5">
              {this.state.images && (
                <WeeklyPic
                  history={this.props.history}
                  image={this.state.images[3]}
                />
              )}
            </div>

            <div className="margin5">
              <p className="d-flex justify-content-center bold gray70">
                Popular spots
              </p>
              {this.state.locations && (this.state.locations.length = 9) ? (
                this.state.locations.map((location, i) => {
                  return (
                    <PopularSpots
                      history={this.props.history}
                      location={location}
                      key={i}
                    />
                  );
                })
              ) : (
                <div className="d-flex justify-content-center">
                  No spots yet
                </div>
              )}
            </div>
          </div>
        )}
        <ButtonGroup className="d-flex justify-content-center">
          <Button
            onClick={this.filterPost}
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            <h6>{this.state.searched ? "Posts" : "New Posts"}</h6>
          </Button>
          {!this.state.searched && (
            <Button
              onClick={this.filterImg}
              style={{
                background: theme.low,
                color: theme.high,
                borderColor: theme.low,
              }}
            >
              <h6>New Pictures</h6>
            </Button>
          )}
          <Button
            onClick={this.filterUser}
            style={{
              background: theme.low,
              color: theme.high,
              borderColor: theme.low,
            }}
          >
            <h6>{this.state.searched ? "Users" : "Top Users"}</h6>
          </Button>
        </ButtonGroup>

        <div className="centerH margin5">
          {this.state.posts && this.state.showPosts && !this.state.searched
            ? this.state.posts.map((post, i) => {
                return (
                  <BlogList history={this.props.history} posts={post} key={i} />
                );
              })
            : this.state.filteredPosts && this.state.showPosts
            ? this.state.filteredPosts.map((post, i) => {
                return (
                  <BlogList history={this.props.history} posts={post} key={i} />
                );
              })
            : null}
        </div>

        <div className="d-flex justify-content-center row">
          {this.state.images && this.state.showImages && !this.state.searched
            ? this.state.images.map((img, i) => {
                return <TopPics id={img.id} key={img.id} image={img} />;
              })
            : null}
        </div>

        <div className="d-flex justify-content-center margin1xrem">
          {this.state.users && this.state.showUsers && !this.state.searched
            ? this.state.users.map((user, i) => {
                return <TopUsers key={i} user={user} />;
              })
            : this.state.filteredUsers && this.state.showUsers
            ? this.state.filteredUsers.map((user, i) => {
                return <TopUsers key={i} user={user} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const BlogScreen = connect(mapStateToProps)(ConnectedBlogScreen);

export default BlogScreen;
