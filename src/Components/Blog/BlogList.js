import React from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import {  ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const BlogList = (props) => {

  return (
    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;

      return (
        <div className="vw100">
          {/* in case there's no posts */}
          {/* <div className="margin1" > */}
            <ListGroupItem style={{ background: theme.low, color: theme.high, borderColor: theme.high }}>
              <ListGroupItemHeading>{props.post.title}</ListGroupItemHeading>
              <ListGroupItemText className="blur">at {props.post.locationName}</ListGroupItemText>
              <ListGroupItemText className="blur">by {props.post.userName}</ListGroupItemText>
              <ListGroupItemText className="blur">{props.post.created_at}</ListGroupItemText>
            </ListGroupItem>
          {/* </div> */}



        </div>)
    }}
    </ThemeContext.Consumer>
  )
}

export default BlogList