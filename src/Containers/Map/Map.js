import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

import predefinedLocations from './PredefinedLocations/LocationStorage';
import CurrentLocationTesting from './CurrentLocation';

import mapStyle from './mapStyle';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.refs = React.createRef();
  }

  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    currentLocation: {
      lat: null,
      lng: null,
    },
  };

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      // console.log(this.props.google.maps.Map().panT);
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
        });
      });
    }
  }

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
          position={{ lat: location.lat, lng: location.lng }}
          onClick={this.onMarkerClick}
          name={location.en}
        />
      );
    });

    return (
      <Map
        centerAroundCurrentLocation
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.lng,
        }}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        ref='maps'
      >
        <Marker
          icon={{
            url: './assets/icons/user.png',
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          position={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng,
          }}
          onClick={this.onMarkerClick}
          name='You are here'
        />
        {locations}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <p>{this.state.selectedPlace.name}</p>
            <img alt='A demo photo' src='./assets/photos/1.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/2.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/3.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/4.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/5.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/6.jpg' width='100px' />
            {/* <img alt='A demo photo' src='./assets/photos/7.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/8.jpg' width='100px' />
            <img alt='A demo photo' src='./assets/photos/9.jpg' width='100px' /> */}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAg-zxdwaWHeCd5QnJ-yBcy1_lvDttzCKk',
})(MapContainer);
