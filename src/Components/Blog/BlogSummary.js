import React from 'react';

const BlogSummary = ({ blog }) => {
  return (
    <div className="card z-depth-0 project-summary" onClick={blog.clicked}>
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{blog.title}</span>
        <p className='grey-text'>{blog.author}</p>
      </div>
    </div>
  );
};

export default BlogSummary;
