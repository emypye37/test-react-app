import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Sidebar from "./components/sidebar/Sidebar";
import Reviews from "./components/sidebar/Reviews";
import RestCard from "./components/sidebar/RestCard";
import restaurants from "./restaurants/restaurants.json";
import restIcon from "./photos/restaurant-71 copy.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      JSONrests: restaurants,
      apiReviews: [],
      map: "",
      apiRests: [],
      id: "UserMap",
      activeReviewsId: "",
      activeMarkerId: "",
      markerArray: [],
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

  getJSONreviews = (placeCode) => {
    if (placeCode === this.state.activeReviewsId) {
      this.setState({
        activeReviewsId: "",
      });
    } else {
      this.setState({
        activeReviewsId: placeCode,
      });
    }
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
      } else {
        alert("No restaurants in your area!");
      }
      self.createAPIMarkers();
    }
  };

  getDetailsResults = (placeCode) => {
    if (placeCode === this.state.activeReviewsId) {
      this.setState({
        activeReviewsId: "",
      });
    } else {
      let request = {
        placeId: placeCode,
        fields: ["reviews", "place_id"],
      };
      let self = this;

      let service = new window.google.maps.places.PlacesService(this.state.map);
      service.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          self.setState({
            apiReviews: place.reviews,
          });
        }

        self.setState({
          activeReviewsId: place.place_id,
        });
      });
    }
  };
  //setVisible for markers
  //marker.setMap(null) to remove completely
  createAPIMarkers = () => {
    let infoWindow = new window.google.maps.InfoWindow({
      content: "",
    });
    let markerArr = [];
    const apiMap = this.state.apiRests.map((apiRest, i) => {
      const apiMarkers = new window.google.maps.Marker({
        position: apiRest.geometry.location,
        map: this.state.map,
        icon: restIcon,
      });
      markerArr.push(apiMarkers);

      const streetView =
        "https://maps.googleapis.com/maps/api/streetview?size=200x100&location=" +
        apiRest.geometry.location +
        "&key=";

      const streetViewNoP = streetView.replace(/[()]/g, "");

      apiMarkers.addListener("click", () => {
        infoWindow.setContent(
          apiRest.name + "<br></br>" + "<img src='" + streetViewNoP + "'>"
        );
        infoWindow.open(this.state.map, apiMarkers);
      });
    });
    this.setState({
      markerArray: markerArr,
    });
  };

  render() {
    return (
      <div className="App">
        <Map
          id={this.state.id}
          JSONrests={this.state.JSONrests}
          loadMapLocation={this.loadMapLocation}
          map={this.state.map}
          getPlacesResults={this.getPlacesResults}
          getDetailsResults={this.getDetailsResults}
          setJSONreviews={this.setJSONreviews}
          apiRests={this.state.apiRests}
          markerArray={this.state.markerArray}
        />
        <Sidebar
          className="sidebar"
          JSONrests={this.state.JSONrests}
          apiRests={this.state.apiRests}
          JSONreviews={this.state.JSONreviews}
          getPlacesResults={this.getPlacesResults}
          getDetailsResults={this.getDetailsResults}
          getJSONreviews={this.getJSONreviews}
          apiReviews={this.state.apiReviews}
          activeReviewsId={this.state.activeReviewsId}
          markerArray={this.state.markerArray}
        ></Sidebar>
      </div>
    );
  }
}

export default App;
