import React, { Component } from 'react';
import { render } from 'react-dom';
import restIcon from '../photos/restaurant-71 copy.png'

class Map extends Component {

  constructor(props) {
    super(props);
    this.onGoogleAPI = this.onGoogleAPI.bind(this);
    this.placesRequest = this.placesRequest.bind(this);
    this.state = {
      map: "",
      apiRests: ""
    }
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDLB8nHFKt9tKevV6dVOsNXav9EMKjVUog`;
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
    this.loadMap();
     
   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(position => {
       
       const pos = {
         lat: 39.544422399999995,
         lng: -104.988672
       };

       const marker = new window.google.maps.Marker({
         position: pos,
         map: this.state.map,
         animation: window.google.maps.Animation.DROP
       })

       
       this.state.map.setCenter(pos);
       this.createJSONMarkers();
       this.placesRequest();
     });
   } else {
     alert("Geolocation is not supported");
   } 
 }

  loadMap = () => {
    this.setState({
      map: new window.google.maps.Map(
       document.getElementById(this.props.id), {
         center: { lat: 39.5444, lng: -102.9886 },
         zoom: 16
       })
    })
  }

  createJSONMarkers() {
    const restMarker = this.props.JSONrests.map((rest, i) => {
      new window.google.maps.Marker({
        position: {
          lat: rest.lat,
          lng: rest.long
        },
        map: this.state.map,
        icon: {
          url: restIcon
        }
      })
      }
    )
  }

  


  placesRequest() {
    let highlandsRanch = new window.google.maps.LatLng(39.544422399999995, -104.988672)

    const request = {
      location: highlandsRanch,
      radius: '740',
      type: ['restaurant']
    }
    const self = this;
    function callback(results, status){
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        self.setState({
          apiRests: results
        })
        for (var i = 0; i < results.length; i++){
                  var APImarker = new window.google.maps.Marker({
                    map: self.state.map,
                    icon: restIcon,
                    position: results[i].geometry.location
                  });
                }
      } else {
        alert("No restaurants in your area!");
      }
    }

    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, callback);
  }


//   getDetails() {
//     let request = {
//       placeId: '',
//       fields: ['name', 'rating', ]
//     }

//     service = new google.maps.places.PlacesService(map);
//     service.getDetails(request, callback);

// function callback(place, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     createMarker(place);
//   }
//   }

  


  



  
  render() {
  
    return (
      <div className="map" apiRests={this.state.apiRests}>
      <div style={{ width: "100%", height: "900px", position: "fixed"}} id={this.props.id} />
      </div>
    )
  }
}

export default Map;

// lat: 39.544422399999995
// lng: -104.988672
// style={{ width: 1000, height: 700 }} 
 