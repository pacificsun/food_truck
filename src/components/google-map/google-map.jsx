import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Paper, Typography } from '@material-ui/core';
import Container from './google-map.container';
import { GOOGLE_API } from '../../config';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    console.log(this.props.markerPoint);
    const { markerPoint } = this.props;
    return (
      <Map
        item
        xs={4}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 39.648209, lng: -75.711185 }}
      >
        {markerPoint.map(point => {
          let latitude = point.latitude;
          let longitude = point.longitude;
          return (
            <Marker
              onClick={this.onMarkerClick}
              title={'Changing Colors Garage'}
              position={{ lat: latitude, lng: longitude }}
              name={'Changing Colors Garage'}
            />
          );
        })}
        {/* <MarkerPoint /> */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography variant="headline" component="h4">
              Changing Colors Garage
            </Typography>
            <Typography component="p">
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  api: GOOGLE_API
})(Container(GoogleMapsContainer));
