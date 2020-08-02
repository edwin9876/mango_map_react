import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap'

class PopularSpots extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    handleClick =  (e) => {
        this.props.history.push(`/spot/${this.props.location.id}`);
      }


    render() {

        return (
            <ButtonGroup className="">
                <Button onClick={this.handleClick} outline size="sm" color="secondary" className="margin1xy overflow-auto" id="filter-btn">{this.props.location.en}</Button>
            </ButtonGroup>
        )


    }
}




export default PopularSpots