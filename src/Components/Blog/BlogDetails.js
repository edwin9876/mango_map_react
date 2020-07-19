import React from 'react'
import SearchBar from '../Layout/SearchBar'


const BlogDetails = () => {
    return (

        <div>
            <SearchBar />
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://media.timeout.com/images/105559599/image.jpg" />
                            <span className="card-title">Demo Place</span>
                        </div>
                        <div className="card-content">

                        <p>Date by who</p>
                        
                        <p className="flow-text">One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a className that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.

To see Flow Text in action, slowly resize your browser and watch the size of this text body change! Use the button above to toggle off/on flow-text to see the difference!</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
