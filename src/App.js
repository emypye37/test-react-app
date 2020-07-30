import React from 'react';
import './App.css';
import Map from './components/Map'


function App() {
  return (
    <div className="App">
        
        <Map
        id="myMap"
        options={{
          center: { lat: 0 , lng: 90 },
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
          Test
        </p>
    </div>
  );
}

export default App;
