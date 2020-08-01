import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap'

class PopularSpots extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    // state = {
    //     locations: [
    //         { name: 'Sai Kung Beach', id: '1' },
    //         { name: 'Dragons back', id: '2' },
    //         { name: 'Tung Long Chau', id: '3' },
    //         { name: 'Lantau island', id: '4' },
    //         { name: 'Repulse Bay', id: '5' },
    //         { name: 'Taikoo shing', id: '6' }
    //     ]
    // }

    handleClick = async (e) => {
        this.props.history.push(`/spot/${this.props.location.id}`);
      }


    render() {
        console.log(this.props)
        // const { locations } = this.state
        // const locationList = locations.length ?
        //     (locations.map(location => {
        return (
            <ButtonGroup className="">
                <Button onClick={this.handleClick} outline size="sm" color="secondary" className="margin1xy overflow-auto" id="filter-btn">{this.props.location.en}</Button>
            </ButtonGroup>
        )


    }
}




export default PopularSpots