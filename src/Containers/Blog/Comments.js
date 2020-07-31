import React from 'react';

// unpacking individual comments from comments array
const IndiComment = ( { comment }) => {

    return (
        <div className="d-flex" >
            <p className="bold margin1x">{comment.user_name}</p>
            <p >{comment.body} </p>
            <i className="margin1x material-icons tiny gray70">edit</i>
            <i className="material-icons tiny gray70">delete_forever</i>
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