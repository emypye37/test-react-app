import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { findByLabelText } from '@testing-library/react';

const styles = {
  root: {
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column'
  },
  info: {
    display: 'flex',
    flexDirection: 'column'
  },
 

};

//array of images here to iterate over and match key to key??

class RestCard extends Component {
  render(){
  
  
  const classes = this.props;
  
    return (
      <div>
      <Card className={classes.root}>
      <CardActionArea className={classes.info}>
        <CardMedia
          component="img"
          alt={this.props.name}
          height="100"
          image={this.props.image}
          className={classes.pic}
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
}

export default withStyles(styles)(RestCard);

