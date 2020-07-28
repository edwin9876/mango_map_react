import React from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import BlogSummary from './BlogSummary'

const BlogList = ({ posts }) => {

  return (
    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;

      return(
    <div className="vw100">
      {/* in case there's no posts */}
      {posts && posts.map(post => {
        return (
          <BlogSummary post={post} key={post.id} />
        )
      })}
    </div>) }}
        </ThemeContext.Consumer>
  )
}

export default BlogList