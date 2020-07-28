import React from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const BlogSummary = ({ post }) => {
  return (
<ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;
   
      return(
    <div className="margin1" >
    <ListGroup>
      <ListGroupItem style={{background: theme.low, color:theme.high, borderColor:theme.high}}>
      <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
      <ListGroupItemText className="blur">
      {post.author}, 2nd July 2020
      </ListGroupItemText>
    </ListGroupItem>
    </ListGroup>
    </div>) }}
    </ThemeContext.Consumer>

  );
};

export default BlogSummary;
