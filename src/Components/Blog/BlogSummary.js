import React from 'react';

const BlogSummary = ({ post }) => {
  return (
   
    <div className="collection z-depth-0 blog-summary center" >
       <ul>
      <div className="collection-content grey-text text-darken-2">
        <span className="bold">{post.title}</span>
        <p className='grey-text'>{post.author}, 2nd July 2020</p>
      </div>
      </ul>
    </div>

  );
};

export default BlogSummary;
