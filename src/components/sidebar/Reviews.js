import React, { Component } from 'react'
// import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class Reviews extends Component {
  constructor(props){
    super();
  }

  onReadReviews = (placeCode) => {
    this.props.getDetailsResults(placeCode);
    if(this.props.reviews) {
    const reviewsRender = this.props.reviews.map((review, i) => {
      return <p>please work</p>
    })
  }
  }

  render(){
    console.log(this.props.reviews);
      

  // const classes = this.props;

  return (
    <div className="reviews">
      <button onClick={() => this.onReadReviews(this.props.placeId)}>Reviews</button>
    </div>
  );
}
}
        


export default Reviews;
