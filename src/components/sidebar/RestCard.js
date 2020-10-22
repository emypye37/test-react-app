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

class RestCard extends Component {
  constructor(props) {
    super();
    this.state = {
      expanded: false,
    };
  }
  onReadReviews = (placeCode) => {
    // this.setState({
    //   expanded: false,
    // });
    this.props.getDetailsResults(placeCode);
    // this.setState({
    //   expanded: true,
    // });
  };

  // handleChange = () => {
  //   if (this.state.expanded === true) {
  //     this.setState({
  //       expanded: false,
  //     });
  //   } else {
  //     this.setState({
  //       expanded: true,
  //     });
  //   }
  // };

  render() {
    let renderReviews = "";

    if (this.props.reviews !== undefined) {
      renderReviews = this.props.reviews.map((review, i) => {
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
            <Accordion expanded={this.state.expanded}>
              <AccordionSummary
                onClick={() => this.onReadReviews(this.props.placeId)}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>GET MORE INFO</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {renderReviews}
                  <Button>Write a Review</Button>
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

// <Reviews getDetailsResults={this.props.getDetailsResults} placeId={this.props.placeId} reviews={this.props.reviews}></Reviews>

// <Button className="moreInfo" onClick={() => this.onReadReviews(this.props.placeId)}>Get More Info</Button>

// <div>
//         {renderReviews}
//         </div>
