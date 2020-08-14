import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, GoogleApiWrapper, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import axios from 'axios';
import predefinedLocations from './PredefinedLocations/LocationStorage';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from 'reactstrap';

import simple from './mapStyle_simple';
import {
  fetchAllDistricts,
  changeZoomLevel,
  fetchAllLocations,
  saveLatLng,
  fetchLocation,
} from '../../redux/actions/map';
import { fetchChatroomList, fetchChatroom } from '../../redux/actions/chatroom';
import { useReducedMotion } from 'framer-motion';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const user = JSON.parse(localStorage.getItem('user'));

const MapContainer = (props) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [currentLocation, setCurrentLocation] = useState({
    lat: null,
    lng: null,
  });
  const [locationId, setLocationId] = useState(null);
  const [selectedPlaceImages, setSelectedPlaceImages] = useState([]);
  const [selfDefinedMarkers, setSelfDefinedMarkers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [chatrooms, setChatrooms] = useState([]);

  const history = useHistory();
  if (!props.history) {
    const newProps = Object.assign({ ...props }, { history });
    props = newProps;
  }

  useEffect(() => {
    props.fetchAllDistricts();
    props.fetchAllLocations();
    if (user) {
      axios
        .get(`${process.env.REACT_APP_DEV_URL}chatroom/all/${user.id}`)
        .then((data) => {
          setChatrooms({
            chatrooms: [...data.data],
          });
        });
    }
  }, []);

  useEffect(() => {
    console.log(selectedPlace);
  }, [selectedPlace]);

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: simple,
    });
  };

  const changeTheme = (mapProps, map) => {
    map.setOptions.styles === simple
      ? map.setOptions({
          styles: mapStyles,
        })
      : map.setOptions({
          styles: simple,
        });
  };

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowInfoWindow(true);
  };

  const onClose = (props) => {
    if (showInfoWindow) {
      setShowInfoWindow(false);
      setActiveMarker(null);
      setSelectedPlaceImages(null);
      setSelectedPlace({});
    }
  };

  const createMarker = (lat, lng) => {
    setSelfDefinedMarkers([...selfDefinedMarkers, { lat, lng }]);
  };

  const createTrip = (e) => {
    console.log('Clicked');
    console.log(selectedPlace);
    props.history.push(`/createtrip?${selectedPlace.name}`);
  };

  const markTripLocation = () => {};

  const createLocation = (e) => {
    props.saveLatLng(this.state.selectedPlace.position);
    props.history.push('/createlocation');
  };

  const onInfoWindowOpen = (props, e) => {
    const button = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 100,
          justifyContent: 'space-around',
        }}
      >
        {!selectedPlace.id && !selectedPlace.district && user ? (
          <Button history={props.history} onClick={() => createTrip()}>
            New Trip
          </Button>
        ) : selectedPlace.location && user ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 100,
              justifyContent: 'space-around',
            }}
          ></div>
        ) : null}
      </div>
    );
    // ReactDOM.render(
    //   React.Children.only(button),
    //   document.getElementById('iwc')
    // );
  };

  const toggle = (e) => {
    let { name, id } = this.state.selectedPlace;
    props.fetchChatroom(e.target.value, { name, id });
    props.history.push(`/chat`);
  };

  let locations;
  let selfDefinedMarkersDisplay;

  locations = props.locations.map((location) => {
    return (
      <Marker
        icon={{
          url: './assets/icons/adventure2.png',
          anchor: new window.google.maps.Point(25, 25),
          scaledSize: new window.google.maps.Size(45, 45),
        }}
        key={location.id}
        id={location.id}
        position={{ lat: location.lat, lng: location.lng }}
        onClick={onMarkerClick}
        name={`${location.en} ${location.cn}`}
        location={true}
      />
    );
  });

  if (selfDefinedMarkers) {
    selfDefinedMarkersDisplay = selfDefinedMarkers.map((marker) => {
      return (
        <Marker
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
          onClick={onMarkerClick}
          name="Should we visit?"
        />
      );
    });
  }

  return (
    <div>
      <Map
        onZoomChanged={(google, map) => {
          props.changeZoomLevel(map.zoom);
        }}
        onClick={(props, google, clickEvent) => {
          const lat = clickEvent.latLng.lat();
          const lng = clickEvent.latLng.lng();
          createMarker(lat, lng);
        }}
        centerAroundCurrentLocation
        google={props.google}
        zoom={13}
        initialCenter={{
          // TODO - default location
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        }}
        onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
      >
        <Marker
          icon={{
            url: './assets/icons/user.png',
            anchor: new window.google.maps.Point(25, 25),
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          position={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          onClick={onMarkerClick}
          name="You are here"
        />
        {selfDefinedMarkersDisplay}
        {locations}
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={onClose}
          onOpen={(e) => {
            onInfoWindowOpen(props, e);
          }}
        >
          <div className="vw50">
            <h5 className="bold gray70 d-flex justify-content-center">
              {selectedPlace.name}
            </h5>
            <div className="d-flex justify-content-center">
              <Button history={props.history} onClick={createTrip}>
                New Trip
              </Button>
            </div>
            {/* <div id="iwc" /> */}
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

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
