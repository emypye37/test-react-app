import React, { Component } from 'react'
import RestCard from './RestCard'



class Sidebar extends Component {
 render(){

  const cardRender = this.props.JSONrests.map((restCard, i) => (<RestCard key={i} name={restCard.restaurantName} address={restCard.address} rating={restCard.rating} image={restCard.image}></RestCard>))

    return (
      <div>
        {cardRender}
      </div>
    )
  
}
}

// <p>{this.props.nameFromApp}, {this.props.ratingFromApp}</p>

export default Sidebar;
// <RestCard restsRender={restsRender} JSONrests={this.props.JSONrests}></RestCard>