import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import Sidebar from './components/sidebar/Sidebar';
import RestCard from './components/sidebar/RestCard'
import restaurants from './restaurants/restaurants.json';



class App extends Component {

  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
    };
  }

  setData = (i) => {
    this.setState({
      name: restaurants[i].restaurantName,
      address: restaurants[i].address,
      rating: restaurants[i].rating
      
    })
  }


  render() {
  return (
    <div className="App">
        
        <Map
        id="userMap" functionFromApp={this.setData}
        // onMapLoad={map => {
        //   var marker = new window.google.maps.Marker({
        //     position: {
        //       lat: 0, lng: 90
        //     } ,
        //     map: map,
        //     title: 'Hello Istanbul!'
        //   });
        // }}
        
      />
      <Sidebar>
      <RestCard jsonName={this.state.restaurants} jsonRating={this.state.rating} jsonAddress={this.state.address} JSONrests={this.state.restaurants}></RestCard>
      <RestCard jsonName={this.state.restaurants} jsonRating={this.state.rating} jsonAddress={this.state.address} JSONrests={this.state.restaurants}></RestCard>
      <RestCard jsonName={this.state.restaurants} jsonRating={this.state.rating} jsonAddress={this.state.address} JSONrests={this.state.restaurants}></RestCard>
      <RestCard jsonName={this.state.restaurants} jsonRating={this.state.rating} jsonAddress={this.state.address} JSONrests={this.state.restaurants}></RestCard>
      </Sidebar>
    </div>
  );

      }
}

export default App;
// <RestCard jsonName={this.state.restaurants} jsonRating={this.state.rating} jsonAddress={this.state.address} JSONrests={this.state.restaurants}></RestCard>