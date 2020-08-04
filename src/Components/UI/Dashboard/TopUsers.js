import React from 'react'


const TopUsers = ({ user }) => {
    console.log(user)
    return (
        <div className="bgdark thinBorder margin1x paddingvw1">
            <img src={user.profile_picture_url} alt="profilepic" className="icons20 rBorder" />
            <p className="white100">{user.user_name}</p>
        </div>

    )
}

export default TopUsers
