import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {

  constructor(props) {
    super(props);
    this.onGoogleAPI = this.onGoogleAPI.bind(this);
  }

  onGoogleAPI() {
     const map = new window.google.maps.Map(
      document.getElementById(this.props.id), {
        center: { lat: 39.5444, lng: -102.9886 },
        zoom: 15
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
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCTHojkj0bq3hqCpUFdNDgk1OU2y0yliw4`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onGoogleAPI()
      })
    } else {
      this.onGoogleAPI()
    }
    this.props.functionFromApp(1);
    

  }


  
  render() {
    return (
      <div className="map">
      <div style={{ width: "100%", height: "100%"}} id={this.props.id} />
      </div>
    )
  }
}

export default Map;

// lat: 39.544422399999995
// lng: -104.988672
// style={{ width: 1000, height: 700 }} 
 