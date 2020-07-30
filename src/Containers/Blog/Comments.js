import React from 'react';

// unpacking individual comments from comments array
const IndiComment = ({ comment }) => {
    return (
        <div className="d-flex" >
        <p className="bold ">{comment.user_id}</p>　
            <p >{comment.body}</p>
        </div>
    );
};


const Comments = ({ comments }) => {

    return (
        <div className="blog-list section">
            {/* in case there's no posts */}
            {comments && comments.map(comment => {
                return (
                    <IndiComment comment={comment} key={comment.id} />
                )
            })}
        </div>
    )
}

export default Comments