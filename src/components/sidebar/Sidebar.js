import React, { Component } from "react";
import RestCard from "./RestCard";

class Sidebar extends Component {
  constructor(props) {
    super();
  }

  onApiRestsLoad = () => {
    if (this.props.apiRests) {
      const apiRestsRender = this.props.apiRests.map((apiCard, i) => {
        if (apiCard.photos) {
          return (
            <RestCard
              key={i}
              name={apiCard.name}
              address={apiCard.vicinity}
              rating={apiCard.rating}
              image={apiCard.photos[0].getUrl()}
              placeId={apiCard.place_id}
              getDetailsResults={this.props.getDetailsResults}
              reviews={this.props.reviews}
            ></RestCard>
          );
        }
      });

      return apiRestsRender;
    }
  };

  render() {
    const JSONcardRender = this.props.JSONrests.map((restCard, i) => (
      <RestCard
        key={i}
        name={restCard.restaurantName}
        address={restCard.address}
        rating={restCard.rating}
        image={restCard.image}
      ></RestCard>
    ));

    return (
      <div className="sidebar">
        {this.onApiRestsLoad()}
        {JSONcardRender}
      </div>
    );
  }
}

export default Sidebar;
