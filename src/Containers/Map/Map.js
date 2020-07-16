import React, { Component } from 'react';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

import predefinedLocations from './PredefinedLocations/LocationStorage';

import mapStyle from './mapStyle';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };

  _mapLoaded(mapProps, map) {
    map.setOptions({
      styles: mapStyle,
    });
  }

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
    let locations = predefinedLocations.map((location) => {
      return (
        <Marker
          icon={{
            url: './assets/icons/adventure.png',
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          position={location.position}
          onClick={this.onMarkerClick}
          name={location.name.en}
        />
      );
    });

    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 22.288323,
          lng: 114.1329424,
        }}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
      >
        {locations}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <p>{this.state.selectedPlace.name}</p>
            <img alt='A demo photo' src='./assets/images/1.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/2.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/3.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/4.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/5.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/6.jpg' width='100px' />
            {/* <img alt='A demo photo' src='./assets/images/7.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/8.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/images/9.jpg' width='100px' /> */}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAg-zxdwaWHeCd5QnJ-yBcy1_lvDttzCKk',
})(MapContainer);
