import React, { Component } from 'react';
import axios from 'axios';
import Map from '../../../../Containers/Map/IndiMap';
import GroupTripSummary from './GroupTripSummary/GroupTripSummary';
import { ThemeContext } from '../../../../Contexts/Theme';

class GroupMap extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_DEV_URL}chatroom/trips/${this.props.chatroomId}`
      )
      .then((response) => {
        this.setState({ ...this.state, trips: response.data });
      });
  }

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div>
        <h5 className=" text-align-center gray70">
          <span className="highlight">{this.state.trips.length} </span>Trips
          with {this.props.roomname}
        </h5>
        <div id="minimap">
          <Map trips={this.state.trips} />
        </div>
        <h5 className="paddingt1 text-align-center gray70">Timeline</h5>
        <GroupTripSummary trips={this.state.trips} />
      </div>
    );
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
