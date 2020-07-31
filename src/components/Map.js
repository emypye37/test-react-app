import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {

  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
     const map = new window.google.maps.Map(
      document.getElementById(this.props.id), {
        center: { lat: 0, lng: 0 },
        zoom: 12
      });
    // this.props.onMapLoad(map)
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
      });
    } else {
      alert("Geolocation is not supported");
    }
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

  // getLocation() {
  //   if(navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       let pos = {
  //         lat: position.coords.lat,
  //         lng: position.coords.lng
  //       }
  //     });
  //   } else {
  //     alert("Geolocation is not supported");
  //   }
  // }

  
  render() {
  
    return (
      <div>
      <div style={{ width: 800, height: 500, alignContent: 'center' }} id={this.props.id} />
      </div>
    )
  }
}

export default Map;