import React from 'react'


const IndiUser = ({ user }) => {
    return (
        <div className="col s4 m6 margin1vw center">
            <img src={user.profile_picture_url} alt="profilepic" className="center icons20 "/>
            <p>{user.user_name}</p>
        </div>
    );
};


const TopUsers = ({users}) => {
    return (

        <div className="row" id="topUsers_container">
             {users && users.map(user => {
                return (
                    <IndiUser user={user} key={user.id} />
                )
            })}
        </div>

    )
}

export default TopUsers
