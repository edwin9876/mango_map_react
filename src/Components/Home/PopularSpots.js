import React, { Component } from 'react';


class PopularSpots extends Component {
    state = {
        locations: [
            { name: 'Sai Kung Beach', id: '1' },
            { name: 'Sai Kung Beach', id: '2' },
            { name: 'Sai Kung Beach', id: '3' },
            { name: 'Sai Kung Beach', id: '4' }

        ]
    }

    render() {
        const { locations } = this.state
        const locationList = locations.length ?
            (locations.map(location => {
                return (
                    <div className="col" key={location.id}>
                        <a href="#"><button className="filter_Btns gray70">Location1</button></a>
                    </div>
                )
            }))
            :
            (<div className="d-flex justify-content-center">No posts yet</div>)
        return (
            <div id="filterTab" className="container-fluid gray70 ">
                <h4 className="d-flex justify-content-center">popular spots</h4>
                <div className="d-flex justify-content-center"> {locationList}</div>
            </div>
        )
    }
}




export default PopularSpots