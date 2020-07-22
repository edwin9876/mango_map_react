import React from 'react';

const BlogSummary = ({ post }) => {
  return (
    <div className="card z-depth-0 blog-summary" >
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{post.title}</span>
        <p className='grey-text'>{post.author}</p>
      </div>
    </div>
  );
};

export default BlogSummary;
