import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from '../CurrentLocation';

class PredefinedLocations extends Component {
  // state = {
  //   locations: [
  //     { photos: ['HI'], latlng: { lat: 22.333694, lng: 114.180858 } },
  //   ],
  // };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    // return <Marker position={{ lat: 22.333694, lng: 114.180858 }} />;
    return <Marker position={{ lat: 22.333694, lng: 114.180858 }} />;
  }
}

export default PredefinedLocations;