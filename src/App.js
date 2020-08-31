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


  render() {
  return (
    <div className="App">
        
        <Map
        id="userMap" JSONrests={this.state.restaurants}
        
      />
      <Sidebar JSONrests={this.state.restaurants}>
      </Sidebar>
    </div>
  );

      }
}

export default App;

