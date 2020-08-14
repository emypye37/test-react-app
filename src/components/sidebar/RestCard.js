import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

//create styles and withstyles 

export default function RestCard(props) {
  console.log(props.JSONrests)
  
  const classes = useStyles();
  const restsRender = props.JSONrests.map((rest, i) => (<p key={i}>{rest.restaurantName}</p>))
      
    return (
      <div>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Big Cheese"
          height="100"
          image="https://www.beefmagazine.com/sites/beefmagazine.com/files/styles/article_featured_retina/public/Arbys%20restaurant%20GettyImages-910776876%20Rick%20Diamond%20resized%20big.jpg?itok=Bjsw-BBC"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {restsRender}
          </Typography>
          <Typography color="textSecondary" component="p">
            {props.jsonAddress}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.jsonRating}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Write a Review
        </Button>
      </CardActions>
    </Card>
        
      </div>
    )
  
}

// <p>{this.props.nameFromApp}, {this.props.ratingFromApp}</p>
// {colorRender}
// {restsRender}

// const restsRender = props.JSONrests.map((rest, i) => (<p key={i}>Info: {rest.restaurantName}</p>))

      // const colorRender = props.colorArray.map((color, i) => (<p key={i}>this is {color}</p>))