import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

class StarSlider extends Component {
  constructor(props) {
    super();
  }

  valueText = (value) => {
    return { value };
  };

  onSliderChange = (event, sliderValue) => {
    this.props.changeMinRating(sliderValue);
  };

  render() {
    return (
      <div className="slider">
        <Typography id="discrete-slider" gutterBottom></Typography>
        <Slider
          onChangeCommitted={this.onSliderChange}
          defaultValue={0}
          getAriaValueText={this.valueText}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={5}
        />
      </div>
    );
  }
}

export default StarSlider;
