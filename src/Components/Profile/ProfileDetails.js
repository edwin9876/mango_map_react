import React from 'react'
import ProfilePanel from './ProfilePanel'
import TripSummary from '../Dashboard/TripSummary'
import GroupSummary from '../Dashboard/GroupSummary'
import PostSummary from '../Dashboard/PostSummary'


const ProfileDetails = (props) => {

    return (
        <div>
            <h3 className="gray50 bold center">PROFILE</h3>
            <i class="material-icons justify-content-center d-flex micons15 blur">account_circle</i>
            <h5 className=" bold center">Pullip Lee</h5>
            <p className="center">Sai Kung, Hong Kong</p>
            <ProfilePanel />
            <TripSummary/>
            <GroupSummary/>
            <PostSummary/>
        </div>
    )
}

export default ProfileDetails
