import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/sidebar/Sidebar';
import Reviews from './components/sidebar/Reviews';
import RestCard from './components/sidebar/RestCard'
import restaurants from './restaurants/restaurants.json';
import restIcon from './photos/restaurant-71 copy.png';




class App extends Component {

  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
      reviews: "",
      map: "",
      apiRests: "",
      id: "UserMap"
    };
  }

  loadMapLocation = () => {
    this.setState({
      map: new window.google.maps.Map(
       document.getElementById(this.state.id), {
         center: { lat: 39.5444, lng: -102.9886 },
         zoom: 15
       })
    })
  }

  getPlacesResults = () => {
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
          apiRests: results,
        });
        
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

   getDetailsResults = (placeCode) => {

    let request = {
      placeId: placeCode,
      fields: ['reviews']
    }
    let self = this;
    // if(this.state.reviews !== ""){
    //   self.setState({
    //     reviews: "",
    //   })
    // }
    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        self.setState({
          reviews: place.reviews,
        })
      }

    });
  }

  //getDetails must take in a placecode which means it needs to fire only when the particular restaurant is clicked, however the state is set when this function fires and the props are not properly passed down in order to render result. how to make events happen in the proper order? 


  render() {
  return (
    <div className="App">
        
        <Map
        id={this.state.id} JSONrests={this.state.restaurants}
        loadMapLocation={this.loadMapLocation} map={this.state.map} getPlacesResults={this.getPlacesResults} getDetailsResults={this.getDetailsResults}
      />
      <Sidebar className="sidebar" JSONrests={this.state.restaurants} apiRests={this.state.apiRests} getPlacesResults={this.getPlacesResults} getDetailsResults={this.getDetailsResults} reviews={this.state.reviews}>
      </Sidebar>
    </div>
  );

      }
}

export default App;

// const reviewsRender = place.reviews.map((review, i) => {
//   return <Reviews authorName={review.author_name} rating={review.rating} timeDescription={review.relative_time_description} text={review.text}></Reviews>
// })
// return reviewsRender;