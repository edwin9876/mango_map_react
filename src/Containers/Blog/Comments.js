import React from 'react';

// unpacking individual comments from comments array
const IndiComment = ( { comment }) => {

    return (
        <div className="d-flex" >
            <p className="bold ">{comment.user_name}</p>
            <p >{comment.body}</p>
        </div>
    );
};


const Comments = ({ comment }) => {

    return (
        <div className="blog-list section">
            {/* in case there's no posts */}

            <IndiComment comment={comment}  />

        </div>
    )
}

export default Comments