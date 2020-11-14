import React, { Component } from "react";
import Reviews from "./Reviews";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Ratings from "react-ratings-declarative";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import restaurants from "../../restaurants/restaurants.json";
import NewReview from "./NewReview";

class RestCard extends Component {
  constructor(props) {
    super();
  }
  onReadReviews = (placeCode) => {
    if (placeCode <= 100) {
      this.props.getJSONreviews(placeCode);
    } else {
      this.props.getDetailsResults(placeCode);
    }
  };

  openReviewForm = () => {
    return true;
  };

  onCardClick = () => {
    //on card click I want to be able to call the click event listener function on the corresponding marker.
    //how to get the information out of that function to be accessible? store in state?
    //other way around will be more difficult, to get marker to make sidebar respond
  };

  //separate array for user added reviews and another for user added restaurants
  render() {
    let renderAPIreviews = "";
    let renderJSONreviews = "";
    let newReviewForm = "";
    if (this.props.placeId < 100) {
      renderJSONreviews = restaurants[this.props.placeId].reviews.map(
        (review, i) => {
          return (
            <Reviews
              name={review.name}
              reviewRating={review.stars}
              when={review.when}
              text={review.comment}
              key={i}
            ></Reviews>
          );
        }
      );
    } else if (this.props.apiReviews !== undefined) {
      renderAPIreviews = this.props.apiReviews.map((review, i) => {
        return (
          <Reviews
            name={review.author_name}
            reviewRating={review.rating}
            when={review.relative_time_description}
            text={review.text}
            key={i}
          ></Reviews>
        );
      });
    }
    if (this.openReviewForm()) {
      newReviewForm = <NewReview></NewReview>;
    }

    return (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={this.props.name}
              height="100"
              image={this.props.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography color="textSecondary" component="p">
                {this.props.address}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.rating}
              </Typography>
              <Ratings rating={this.props.rating} widgetRatedColors="black">
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Accordion
              expanded={this.props.activeReviewsId === this.props.placeId}
            >
              <AccordionSummary
                onClick={() => this.onReadReviews(this.props.placeId)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={this.props.id}
              >
                <Typography>READ REVIEWS</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <Button
                  //onclick here??
                  >
                    Write a Review
                  </Button>
                  {newReviewForm}
                  {renderAPIreviews}
                  {renderJSONreviews}
                </div>
              </AccordionDetails>
            </Accordion>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default RestCard;
