import React from 'react'
import UserPic from '../../Icons/userPic.jpg'

const UserPicList = () => {
    return (
        <div className= "d-flex justify-content-center">
            <img className="userPic_mini" src={UserPic} alt="userPic"/>
            <img className="userPic_mini" src={UserPic} alt="userPic"/>
            <img className="userPic_mini" src={UserPic} alt="userPic"/>
            <img className="userPic_mini" src={UserPic} alt="userPic"/>
        </div>
    )
}

export default UserPicList
