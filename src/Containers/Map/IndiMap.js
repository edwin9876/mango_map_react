import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";
import axios from "axios";
import predefinedLocations from "./PredefinedLocations/LocationStorage";
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

import simple from "./mapStyle_simple";
import {
  fetchAllDistricts,
  changeZoomLevel,
  fetchAllLocations,
  saveLatLng,
  fetchLocation,
} from "../../redux/actions/map";
import { fetchChatroomList, fetchChatroom } from "../../redux/actions/chatroom";
import { useReducedMotion } from "framer-motion";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const user = JSON.parse(localStorage.getItem("user"));

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
    dropdownOpen: false,
    chatrooms: [],
  };

  componentDidMount() {
    this.props.fetchAllDistricts();
    this.props.fetchAllLocations();
    if (user) {
      console.log(user.id);
      axios
        .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${user.id}`)
        .then((data) => {
          console.log(data);
          this.setState({
            ...this.state,
            chatrooms: [...data.data],
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
    this.setState(
      {
        ...this.state,
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
      },
      () => {
        if (!this.state.selectedPlace.id) {
          console.log("Return");
          return;
        }
        axios
          .get(
            `${process.env.REACT_APP_DEV_URL}image/public/${this.state.selectedPlace.id}`
          )
          .then((data) => {
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
          ...this.state,
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

  createTrip = (e) => {
    this.props.history.push("/createtrip");
  };

  markTripLocation = () => {};

  createLocation = (e) => {
    this.props.saveLatLng(this.state.selectedPlace.position);
    console.log(this.props);
    this.props.history.push("/createlocation");
  };

  onInfoWindowOpen(props, e) {
    const button = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 100,
          justifyContent: "space-around",
        }}
      >
        {!this.state.selectedPlace.id &&
        !this.state.selectedPlace.district &&
        user ? (
          <Button history={this.props.history} onClick={this.createTrip}>
            New Trip
          </Button>
        ) : this.state.selectedPlace.location && user ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              justifyContent: "space-around",
            }}
          ></div>
        ) : null}
      </div>
    );
    ReactDOM.render(
      React.Children.only(button),
      document.getElementById("iwc")
    );
    console.log(this.state);
  }

  toggle = (e) => {
    let { name, id } = this.state.selectedPlace;
    this.props.fetchChatroom(e.target.value, { name, id });
    console.log(this.props);
    this.props.history.push(`/chat`);
  };

  render() {
    let locations;
    let selfDefinedMarkers;

    locations = this.props.districts.map((location) => {
      return (
        <Marker
          icon={{
            url: "./assets/icons/adventure2.png",
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(45, 45),
          }}
          key={location.id}
          id={location.id}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={this.onMarkerClick}
          name={`${location.en} ${location.cn}`}
          location={true}
        />
      );
    });

    if (this.state.selfDefinedMarkers) {
      selfDefinedMarkers = this.state.selfDefinedMarkers.map((marker) => {
        return (
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
            }}
            onClick={this.onMarkerClick}
            name="Should we visit?"
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
              url: "./assets/icons/user.png",
              anchor: new window.google.maps.Point(25, 25),
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            position={{
              lat: this.state.currentLocation.lat,
              lng: this.state.currentLocation.lng,
            }}
            onClick={this.onMarkerClick}
            name="You are here"
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
            <div className="vw50">
              <h5 className="bold gray70 d-flex justify-content-center">
                {this.state.selectedPlace.name}
              </h5>
              <div className="d-flex justify-content-center"></div>
              <div id="iwc" />
            </div>
          </InfoWindow>
        </Map>
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
    fetchChatroomList: (user_id) => dispatch(fetchChatroomList(user_id)),
    fetchChatroom: (chatroom_id, selectedPlace) =>
      dispatch(fetchChatroom(chatroom_id, selectedPlace)),
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
