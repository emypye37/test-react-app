import React, { Component } from 'react';
import { render } from 'react-dom';
import restIcon from '../photos/restaurant-71 copy.png';


class Map extends Component {

  constructor(props) {
    super();
    this.onGoogleAPI = this.onGoogleAPI.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyBhhQytLa3AZetEOs_JGMLSWA_aXkrR0KI`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onGoogleAPI()
      })
    } else {
      this.onGoogleAPI()
    }
  }

  onGoogleAPI() {
    this.props.loadMapLocation();
   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       
       const pos = {
         lat: 39.543170,
         lng: -104.986427
       };

       const marker = new window.google.maps.Marker({
         position: pos,
         map: this.props.map,
         animation: window.google.maps.Animation.DROP
       })

       this.props.map.setCenter(pos);
       this.createJSONMarkers();
       this.props.getPlacesResults();
      //  this.props.getDetailsResults();

     });
   } else {
     alert("Geolocation is not supported");
   } 
 }


  createJSONMarkers() {
    const restMarker = this.props.JSONrests.map((rest, i) => {
      new window.google.maps.Marker({
        position: {
          lat: rest.lat,
          lng: rest.long
        },
        map: this.props.map,
        icon: {
          url: restIcon
        }
      })
      }
    )
  }

  render() {
  
    return (
      <div className="map">
      <div style={{ width: "100%", height: "750px", position: "fixed"}} id={this.props.id} />
      </div>
    )
  }
}

export default Map;

// lat: 39.544422399999995
// lng: -104.988672
// style={{ width: 1000, height: 700 }} 
 