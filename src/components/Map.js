import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {

  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBUUmWkqnCVEvVJdz0nJtG5D96Ich_el7k`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }

  }

  getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported");
    }
  }

  getCoordinates(position) {
  let pos =  {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  }
  

  render() {
   this.getLocation();
    return (
      <div>
      <div style={{ width: 800, height: 500, alignContent: 'center' }} id={this.props.id} />
      </div>
    )
  }
}

export default Map;