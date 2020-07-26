import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';

import icon from '../../assets/icons/adventure.png';
import photo1 from '../../assets/photos/1.jpg';
import SearchBar from '../../Components/UI/Layout/SearchBar';

import predefinedLocations from './PredefinedLocations/LocationStorage';
import CurrentLocationTesting from './CurrentLocation';

import axios from 'axios';

// import mapStyle from './mapStyle';
import simple from './mapStyle_simple';

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
    locations_id: null,
    selectedPlaceImages: [],
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
    // console.log(map)
    map.setOptions({
      styles: simple,
    });
  }

  changeTheme(mapProps, map) {
    map.setOptions.styles === simple
      ? map.setOptions({
          styles: mapStyles,
        })
      : map.setOptions({
          styles: simple,
        });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      },
      () => {
        axios
          .get(
            `https://localhost:8000/image/public/${this.state.selectedPlace.locations_id}`
          )
          .then((data) => {
            console.log(data.data);
            this.setState({
              ...this.state,
              selectedPlaceImages: data.data,
            });
          });
      }
    );

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
          locations_id={location.locations_id}
        />
      );
    });

    let locationImages = <p> Please wait, Images are loading...</p>;

    if (this.state.selectedPlaceImages) {
      console.log('Outside');
      locationImages = this.state.selectedPlaceImages.map((image) => {
        console.log('inside');
        console.log(image.url);
        return (
          <img
            className='center icons30 sm-col-5'
            alt={image.en}
            src={`${image.url}.jpg`}
          />
        );
      });
    }

    return (
      <div>
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
            <div className='center'>
              <h5 className='bold gray70'>{this.state.selectedPlace.name}</h5>
              <div className='row d-flex'>
                {locationImages}
                {/* <img
                  className='center icons30 sm-col-5'
                  alt='A demo'
                  src='./assets/photos/1.jpg'
                />
                <img
                  className='center icons30 sm-col-5'
                  alt='A demo'
                  src='./assets/photos/5.jpg'
                />
              </div>
              <div className='row d-flex'>
                <img
                  className='center icons30'
                  alt='A demo'
                  src='./assets/photos/2.jpg'
                />
                <img
                  className='center icons30'
                  alt='A demo'
                  src='./assets/photos/4.jpg'
                /> */}
              </div>
            </div>
          </InfoWindow>
        </Map>
        {/* <div>
          <i class="material-icons" onClick={() => { this.changeTheme }}>add</i>
        </div> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAg-zxdwaWHeCd5QnJ-yBcy1_lvDttzCKk',
})(MapContainer);
