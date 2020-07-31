import React from 'react';
import LocationStorage from '../Map/PredefinedLocations/LocationStorage';

// unpacking individual comments from comments array
const IndiComment = ({ comment }) => {

    let user_id = JSON.parse(localStorage.getItem('user')).id

    return (
        <div className="d-flex" >
            <p className="bold margin1x">{comment.user_name}</p>
            <p >{comment.body} </p>
            {user_id === comment.user_id &&
                <div>
                    <i className="margin1x material-icons tiny gray70">edit</i>
                    <i className="material-icons tiny gray70">delete_forever</i>
                </div>
            }
        </div>
    );
};


const Comments = ({ comment }) => {

    return (
        <div className="blog-list section">
            {/* in case there's no posts */}

            <IndiComment comment={comment} />


        </div>
    )
}

export default Comments