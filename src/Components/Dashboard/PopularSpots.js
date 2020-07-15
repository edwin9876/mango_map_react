import React, { Component } from 'react';

class PopularSpots extends Component {
    state = {
        locations: [
            { name: 'Sai Kung Beach', id: '1' },
            { name: 'Dragons back', id: '2' },
            { name: 'Tung Long Chau', id: '3' },
            { name: 'Lantau island', id: '4' },
            { name: 'Repulse Bay', id: '5' },
            { name: 'Taikoo shing', id: '6' }
        ]
    }

    render() {
        const { locations } = this.state
        const locationList = locations.length ?
            (locations.map(location => {
                return (
                    <div className="col s4" key={location.id}>
                        <a href="/map/id" className="transparent-bg"><button className="filter_Btns">{location.name}</button></a>
                        {/* <a href="/map/id" className="transparent-bg"><div className="card center filter_Btns ">{location.name}</div></a> */}
                    </div>
                )
            }))
            :
            (<div className="d-flex justify-content-center">No posts yet</div>)
        return (
            <div id="filterTab">
                <p className="center bold gray70">popular spots</p>
                <div className="row"> {locationList}</div>
            </div>
        )
    }
}




export default PopularSpots