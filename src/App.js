import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'


class App extends Component {

  render() {
  return (
    <div className="App">
        
        <Map
        id="myMap"
        options={{
          center: { lat: 8 , lng: 90 },
          zoom: 8
        }}
        onMapLoad={map => {
          var marker = new window.google.maps.Marker({
            position: {
              lat: 0, lng: 90
            } ,
            map: map,
            title: 'Hello Istanbul!'
          });
        }}
        
      />
      <p>
        Gekko
        </p>
    </div>
  );

      }
}

export default App;
