import React, { useState } from 'react'
// import ProfilePanel from './ProfilePanel'

import TripSummary from '../UI/Dashboard/TripSummary'
import GroupSummary from '../UI/Dashboard/GroupSummary'
import PostSummary from '../UI/Dashboard/PostSummary'


const ProfileDetails = () => {
    const [section, changeSection] = useState("sectionA");
    return (
        <div>
       
            <i class="material-icons justify-content-center d-flex micons15 blur margin5">account_circle</i>
            <h5 className=" bold center">Pullip Lee</h5>
            <p className="center">Sai Kung, Hong Kong</p>


            <div className="d-flex justify-content-center margin1 ">

                <div onClick={() => changeSection("TripSummary")} id="TripSummary" className="card margin1 panels center">
                    <h5 className="bold">30</h5>
                    <p>Trips</p>
                </div>

                <div onClick={() => changeSection("GroupSummary")} id="GroupSummary" className="card margin1 panels center">
                    <h5 className="bold">6</h5>
                    <p>Groups</p>
                </div>

                <div onClick={() => changeSection("PostSummary")} id="PostSummary" className="card margin1 panels center">
                    <h5 className="bold">2</h5>
                    <p>Postings</p>
                </div>

            </div >
            <TripSummary />
            <GroupSummary />
            <PostSummary />
        </div>
    )
}

export default ProfileDetails


