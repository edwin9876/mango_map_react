import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import axios from 'axios';
import predefinedLocations from './PredefinedLocations/LocationStorage';
import { Button } from 'reactstrap';

import simple from './mapStyle_simple';
import {
  fetchAllDistricts,
  changeZoomLevel,
  fetchAllLocations,
  saveLatLng,
  fetchLocation,
} from '../../redux/actions/map';

const mapStyles = {
  width: '100%',
  height: '100%',
};

// Testing

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.mapRefs = React.createRef();
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
    // This must be stored in database
    selfDefinedMarkers: [],
  };

  componentDidMount() {
    this.props.fetchAllDistricts();
    this.props.fetchAllLocations();

    console.log(JSON.parse(localStorage.getItem('user')));

    // console.log(this.mapRefs);

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

  onMarkerClick = (props, marker, e) => {
    console.log(props);
    this.setState(
      {
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      },
      () => {
        if (!this.state.selectedPlace.id) {
          console.log('Return');
          return;
        }
        axios
          .get(
            `${process.env.REACT_APP_DEV_URL}image/public/${this.state.selectedPlace.id}`
          )
          .then((data) => {
            console.log(data);
            this.setState({
              ...this.state,
              selectedPlaceImages: data.data,
            });
          });
      }
    );
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState(
        {
          showingInfoWindow: false,
          activeMarker: null,
          selectedPlaceImages: null,
          selectedPlace: {},
        },
        () => {
          console.log(props);
        }
      );
    }
  };

  createMarker = (lat, lng) => {
  
    this.setState(
      {
        ...this.state,
        selfDefinedMarkers: [...this.state.selfDefinedMarkers, { lat, lng }],
      },
      () => {
        console.log(this.state.selfDefinedMarkers);
      }
    );
  };

  createPost = (e) => {
    console.log(this.state);
    this.props.history.push(
      `/createpost/${this.state.selectedPlace.name}/${this.state.selectedPlace.id}`
    );
  };

  createLocation = (e) => {
    this.props.saveLatLng(this.state.selectedPlace.position);
    console.log(this.props);
    this.props.history.push('/createlocation');
  };

  onInfoWindowOpen(props, e) {
    const button = (
      <div className='d-flex justify-content-center'>
        {!this.state.selectedPlace.id && !this.state.selectedPlace.district ? (
          <Button onClick={this.createLocation}>Create a new spot!</Button>
        ) : this.state.selectedPlace.location ? (
          <Button onClick={this.createPost}>Add New Post, Picture</Button>
        ) : null}
      </div>
    );
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById('iwc')
    );
    console.log(this.state);
  }

  render() {
    let locations;
    let selfDefinedMarkers;

    this.props.zoom <= 13
      ? (locations = this.props.districts.map((district) => {
          return (
            <Marker
              icon={{
                url: './assets/icons/adventure.png',
                anchor: new window.google.maps.Point(25, 25),
                scaledSize: new window.google.maps.Size(45, 45),
              }}
              key={district.id}
              id={district.id}
              position={{ lat: district.lat, lng: district.lng }}
              onClick={this.onMarkerClick}
              name={`${district.en} ${district.cn}`}
              district={true}
            />
          );
        }))
      : (locations = this.props.locations.map((location) => {
          return (
            <Marker
              icon={{
                url: './assets/icons/adventure1.png',
                anchor: new window.google.maps.Point(25, 25),
                scaledSize: new window.google.maps.Size(50, 50),
              }}
              key={location.id}
              id={location.id}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={this.onMarkerClick}
              name={`${location.en} ${location.cn}`}
              location={true}
            />
          );
        }));

    let locationImages = <p> Please wait, Images are loading...</p>;

    if (this.state.selectedPlaceImages) {
      locationImages = this.state.selectedPlaceImages.map((image, i) => {
        return (
          <img
            key={i}
            className='center icons30 sm-col-5'
            alt={image.en}
            src={`${image.url}.jpg`}
          />
        );
      });
    }

    if (this.state.selfDefinedMarkers) {
      selfDefinedMarkers = this.state.selfDefinedMarkers.map((marker) => {
        return (
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            onClick={this.onMarkerClick}
            name='Something special here?'
          />
        );
      });
    }

    return (
      <div>
        <Map
          ref={this.mapRefs}
          onZoomChanged={(google, map) => {
            this.props.changeZoomLevel(map.zoom);
          }}
          onLoad={(map) => console.log(map)}
          onClick={(props, google, clickEvent) => {
            const lat = clickEvent.latLng.lat();
            const lng = clickEvent.latLng.lng();
            console.log(google);
            this.createMarker(lat, lng);
          }}
          centerAroundCurrentLocation
          google={this.props.google}
          zoom={13}
          initialCenter={{
            // TODO - default location
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng,
          }}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
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
          {selfDefinedMarkers}
          {locations}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            onOpen={(e) => {
              this.onInfoWindowOpen(this.props, e);
            }}
          >
            <div className='vw50'>
              <h5 className='bold gray70 d-flex justify-content-center'>
                {this.state.selectedPlace.name}
              </h5>
              <div className='d-flex justify-content-center'>
                {locationImages}
              </div>
              <div id='iwc' />
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

const mapStateToProps = (state) => {
  return {
    districts: state.map.districts,
    locations: state.map.locations,
    zoom: state.map.zoom,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDistricts: () => dispatch(fetchAllDistricts()),
    fetchAllLocations: () => dispatch(fetchAllLocations()),
    changeZoomLevel: (zoomLevel) => dispatch(changeZoomLevel(zoomLevel)),
    saveLatLng: (lat_lng) => dispatch(saveLatLng(lat_lng)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  })(MapContainer)
);
