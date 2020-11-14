import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class NewReview extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <form>
        <div>
          <TextField
            id="outlined-size-small"
            label="Name"
            variant="outlined"
            size="small"
            margin="dense"
          />
          <TextField
            id="outlined-multiline-flexible-full-width"
            label="Comments"
            variant="outlined"
            rowsMax={4}
            multiline
            margin="dense"
          />
        </div>
      </form>
    );
  }
}

export default NewReview;
