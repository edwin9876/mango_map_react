import React from 'react'


const Weekly = ({ post }) => {
    console.log({ post })

    
    return (

        <div className="col s12 m12">
            <div className="card darken-1">
                <div className="card-content grey-text">
                    <h4 className="card-title">{post[0].title}</h4>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img src={post[0].main_picture_url} alt="postimage" className="activator" />
                    </div>
                
                   <br/> <p>by {post[0].author}</p>
                </div>
                <div className="card-action center ">
                    <a href= "/blog/:id" className="bold green-text">View more</a>
            </div>

        </div>
        </div >
    )
}

const WeeklyPost = ({ post }) => {
    return (
        <div className="row">
            <p className="center bold gray70">This week's best post</p>
            <Weekly post={post} key={post.id} />
        </div>
    )
}

export default WeeklyPost
