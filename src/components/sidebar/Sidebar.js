import React, { Component } from "react";
import RestCard from "./RestCard";
import StarSlider from "./StarSlider";

class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      sliderValue: 0,
    };
  }

  changeMinRating = (sliderValue) => {
    this.setState({
      sliderValue: sliderValue,
    });
  };

  onApiRestsLoad = (sliderValue) => {
    if (this.props.apiRests) {
      const apiRestsRender = this.props.apiRests.map((apiCard, i) => {
        if (apiCard.photos && apiCard.rating >= sliderValue) {
          return (
            <RestCard
              key={i}
              id={apiCard.place_id}
              name={apiCard.name}
              address={apiCard.vicinity}
              rating={apiCard.rating}
              image={apiCard.photos[0].getUrl()}
              placeId={apiCard.place_id}
              getDetailsResults={this.props.getDetailsResults}
              apiReviews={this.props.apiReviews}
              activeReviewsId={this.props.activeReviewsId}
            ></RestCard>
          );
        }
      });

      return apiRestsRender;
    }
  };

  makeJSONcards = (sliderValue) => {
    const JSONcardRender = this.props.JSONrests.map((restCard, i) => {
      if (restCard.rating >= sliderValue) {
        return (
          <RestCard
            key={i}
            name={restCard.restaurantName}
            address={restCard.address}
            rating={restCard.rating}
            image={restCard.image}
            placeId={i}
            getJSONreviews={this.props.getJSONreviews}
            JSONreviews={this.props.JSONreviews}
            activeReviewsId={this.props.activeReviewsId}
          ></RestCard>
        );
      }
    });
    return JSONcardRender;
  };

  render() {
    return (
      <div className="sidebar">
        <h2>Restaurants in your area</h2>
        <div>
          Filter restaurants by minimum rating
          <span>
            <StarSlider
              JSONrests={this.props.JSONrests}
              apiRests={this.props.apiRests}
              markerArray={this.props.markerArray}
              changeMinRating={this.changeMinRating}
            ></StarSlider>
          </span>
        </div>
        {this.onApiRestsLoad(this.state.sliderValue)}
        {this.makeJSONcards(this.state.sliderValue)}
      </div>
    );
  }
}

export default Sidebar;
