import React from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const BlogList = (props) => {

  return (
    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;

      return (
        <div className='margin1vw'>
          {/* in case there's no posts */}
          <ListGroupItem style={{ background: theme.low, color: theme.high, borderColor: theme.high }}>
            <ListGroupItemHeading className="d-flex justify-content-center">{props.post.title.toUpperCase()}</ListGroupItemHeading>
            <ListGroupItemText className="gray70 d-flex justify-content-center">{props.post.locationName.toUpperCase()}</ListGroupItemText>
            <ListGroupItemText className="blur d-flex justify-content-center">by {props.post.userName}</ListGroupItemText>
            <p className="blur d-flex justify-content-center">{props.post.created_at.slice(0, 10)}</p>
          </ListGroupItem>
        </div>)
    }}
    </ThemeContext.Consumer>
  )
}

export default BlogList