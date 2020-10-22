import React, { Component } from "react";

class InfoWindow extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="infoWindow">
        <span className="restName">Title</span>
        <div className="streetView">StreetView</div>
      </div>
    );
  }
}

export default InfoWindow;
