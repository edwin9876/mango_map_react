import React from 'react';
import BlogSummary from './BlogSummary'

const BlogList = ({ posts }) => {

  return (
    <div className="vw100">
      {/* in case there's no posts */}
      {posts && posts.map(post => {
        return (
          <BlogSummary post={post} key={post.id} />
        )
      })}
    </div>
  )
}

export default BlogList