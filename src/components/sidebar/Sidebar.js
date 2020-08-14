import React, { Component } from 'react'



class Sidebar extends Component {
 render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  
}
}

// <p>{this.props.nameFromApp}, {this.props.ratingFromApp}</p>

export default Sidebar;