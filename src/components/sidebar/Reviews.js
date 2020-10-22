import React, { Component } from "react";
// import { withStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Ratings from "react-ratings-declarative";

class Reviews extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="reviews">
        <div>
          <h3>{this.props.name}</h3>
          <Ratings rating={this.props.reviewRating} widgetRatedColors="black">
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
          <p>{this.props.when}</p>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Reviews;
