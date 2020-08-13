import React, { Component } from 'react'
import Map from '../../../../Containers/Map/IndiMap'
import GroupTripSummary from './GroupTripSummary/GroupTripSummary'
import { ThemeContext } from '../../../../Contexts/Theme';

class GroupMap extends Component {
    static contextType = ThemeContext;
    constructor(props) {
        super(props);
        this.state = {
            trips: []
        };
    }
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div>
                <h5 className=" text-align-center gray70"><span className="highlight">5 </span>Trips with Capstone</h5>
                <div id="minimap">
                    <Map />
                </div>
                <h5 className="paddingt1 text-align-center gray70">Timeline</h5>
                <GroupTripSummary />

            </div>
        )
    }
}



export default GroupMap;


//     {this.state.trips? this.state.trips.map((item,i)=>{
//         return(
//          <GroupTripSummary 
//          trip={item}
//          key={i}
//          />
//         )
//     })
// :null}