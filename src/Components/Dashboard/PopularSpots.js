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
                        <a href="/map/id" className="transparent-bg"><button className="filter_Btns gray70">{location.name}</button></a>
                    </div>
                )
            }))
            :
            (<div className="d-flex justify-content-center">No posts yet</div>)
        return (
            <div id="filterTab" className="container-fluid gray70 ">
                <p className="d-flex justify-content-center bold">popular spots</p>
                <div className="row"> {locationList}</div>
            </div>
        )
    }
}




export default PopularSpots