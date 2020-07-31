import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap'

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
                    <ButtonGroup key={location.id} className="">
                  <Button outline size="sm" color="secondary" className="margin1xy" id="filter-btn">{location.name}</Button>
                    </ButtonGroup>
                )
            }))
            :
            (<div className="d-flex justify-content-center">No spots yet</div>)
        return (
            <div className="margin5">
                <p className="d-flex justify-content-center bold gray70">Popular spots</p>
                {locationList}
            </div>
        )
    }
}




export default PopularSpots