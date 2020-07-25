import React from 'react'
import TripSummary from '../UI/Dashboard/TripSummary'
import GroupSummary from '../UI/Dashboard/GroupSummary'
import PostSummary from '../UI/Dashboard/PostSummary'
import { ThemeContext } from '../../Contexts/Theme'


const ProfileDetails = () => {

    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

return(
        <div className="container noBorder" style={{background: theme.low}}>
       
            <i class="material-icons justify-content-center d-flex micons15 blur">account_circle</i>
            <h4 className=" bold justify-content-center d-flex">Pullip Lee</h4>
            <p className="justify-content-center d-flex blur bold">Sai Kung, Hong Kong</p>


            <div className="d-flex justify-content-center margin1" >

                <div id="TripSummary" className="card margin1 panels center" style={{background: theme.low, borderColor:theme.highlight}}>
                    <h4 className="bold justify-content-center d-flex">30</h4>
                    <p className="justify-content-center d-flex">Trips</p>
                </div>

                <div id="GroupSummary" className="card margin1 panels center" style={{background: theme.low, borderColor:theme.highlight}}>
                    <h4 className="bold justify-content-center d-flex">6</h4>
                    <p className=" justify-content-center d-flex">Groups</p>
                </div>

                <div id="PostSummary" className="card margin1 panels center" style={{background: theme.low, borderColor:theme.highlight}}>
                    <h4 className="bold justify-content-center d-flex">2</h4>
                    <p className=" justify-content-center d-flex">Postings</p>
                </div>

            </div>
            <TripSummary />
            <GroupSummary />
            <PostSummary />
        </div>) }}
        </ThemeContext.Consumer>
    )
}

export default ProfileDetails
