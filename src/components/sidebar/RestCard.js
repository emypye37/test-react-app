import React, { Component } from 'react';
import Reviews from './Reviews';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Ratings from 'react-ratings-declarative';



class RestCard extends Component {

  constructor(props){
    super();
  }

  
  render(){


    // const renderReviews = this.props.reviews.map((review, i) => {
    //   return <p name={review.author_name}></p>
    // })
  
  
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
          <Ratings 
          rating={this.props.rating}
          widgetRatedColors="black">
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>
          <Ratings.Widget/>
          </Ratings>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Reviews getDetailsResults={this.props.getDetailsResults} placeId={this.props.placeId} reviews={this.props.reviews}></Reviews>
      </CardActions>
    </Card>
        
      </div>
    )
    } 
}

export default RestCard;

