import React, { Component } from 'react'
import Weekly from '../Dashboard/Weekly'
import BlogNav from '../Blog/BlogNav'


export default class BlogScreen extends Component {
    render() {
        return (
            <div>
          <BlogNav/>
          <Weekly/>
            </div>
        )
    }
}
