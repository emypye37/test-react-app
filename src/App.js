import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/sidebar/Sidebar";
import Reviews from "./components/sidebar/Reviews";
import RestCard from "./components/sidebar/RestCard";
import restaurants from "./restaurants/restaurants.json";
import restIcon from "./photos/restaurant-71 copy.png";
import InfoWindow from "./components/InfoWindow";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
      reviews: [],
      map: "",
      apiRests: [],
      id: "UserMap",
    };
  }

  loadMapLocation = () => {
    this.setState({
      map: new window.google.maps.Map(document.getElementById(this.state.id), {
        center: { lat: 39.5444, lng: -102.9886 },
        zoom: 15,
      }),
    });
  };

  getPlacesResults = () => {
    let highlandsRanch = new window.google.maps.LatLng(
      39.544422399999995,
      -104.988672
    );

    const request = {
      location: highlandsRanch,
      radius: "740",
      type: ["restaurant"],
    };
    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, callback);
    const self = this;
    function callback(results, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        self.setState({
          apiRests: results,
        });
        self.createAPIMarkers();
      } else {
        alert("No restaurants in your area!");
      }
    }
  };

  getDetailsResults = (placeCode) => {
    let request = {
      placeId: placeCode,
      fields: ["reviews"],
    };
    let self = this;

    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        self.setState({
          reviews: place.reviews,
        });
      }
    });
  };

  createAPIMarkers = () => {
    const APImarker = this.state.apiRests.map((apiRest, i) => {
      new window.google.maps.Marker({
        position: apiRest.geometry.location,
        map: this.state.map,
        icon: restIcon,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Map
          id={this.state.id}
          JSONrests={this.state.restaurants}
          loadMapLocation={this.loadMapLocation}
          map={this.state.map}
          getPlacesResults={this.getPlacesResults}
          getDetailsResults={this.getDetailsResults}
          apiRests={this.state.apiRests}
        />
        <Sidebar
          className="sidebar"
          JSONrests={this.state.restaurants}
          apiRests={this.state.apiRests}
          getPlacesResults={this.getPlacesResults}
          getDetailsResults={this.getDetailsResults}
          reviews={this.state.reviews}
        ></Sidebar>
      </div>
    );
  }
}

export default App;
