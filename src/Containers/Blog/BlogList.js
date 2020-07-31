import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeContext } from '../../Contexts/Theme'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class ConnectedBlogList extends Component {
  static contextType = ThemeContext;

  constructor(props) {
      super(props)
      this.state = {
      }
  }

  handleClick = async (e) => {
    this.props.history.push(`/blog/${this.props.posts.id}`);
}
     
render() {
  const { isLightTheme, light, dark } = this.context;
  const theme = isLightTheme ? light : dark;
  console.log(this.props)
return (
        <div className='margin1vw'>
          {/* in case there's no posts */}
          <ListGroupItem  onClick={this.handleClick} style={{ background: theme.low, color: theme.high, borderColor: theme.high }}>
          <ListGroupItemHeading className="d-flex justify-content-center">{this.props.posts.title.toUpperCase()}</ListGroupItemHeading>
          <ListGroupItemText className="gray70 d-flex justify-content-center">{this.props.posts.locationName.toUpperCase()}</ListGroupItemText>
          <ListGroupItemText className="blur d-flex justify-content-center">by {this.props.posts.userName}</ListGroupItemText>
          <p className="blur d-flex justify-content-center">{this.props.posts.created_at.slice(0, 10)}</p>
        </ListGroupItem>
        </div>)

}}

const mapStateToProps = (state) => {
  return {
      ...state
  }
}


const BlogList = connect(mapStateToProps)(ConnectedBlogList)


    export default BlogList