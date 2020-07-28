import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const BlogSummary = ({ post }) => {
  return (
   
    <div className="margin1" >
    <ListGroup>
      <ListGroupItem>
      <ListGroupItemHeading>{post.title}</ListGroupItemHeading>
      <ListGroupItemText>
      {post.author}, 2nd July 2020
      </ListGroupItemText>
    </ListGroupItem>
    </ListGroup>
    </div>

  );
};

export default BlogSummary;
