import React, { Component } from "react";
import {
  Typography as Font,
  Button,
  Modal,
  RadioGroup,
  Radio,
  TextField,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Container
} from "@material-ui/core";

class UserAttr extends Component {
  state = {
    open: false
  };

  open = () => this.setState(() => ({ open: true }));
  close = () => this.setState(() => ({ open: false }));
  editAttr = () => {};

  render() {
    const { bio, age, nationality, gender } = this.props.userAttr;
    return (
      <>
        <Font variant="body1">{bio}</Font>
        <Font variant="body1">Gender: {gender}</Font>
        <Font variant="body1">Age: {age}</Font>
        <Font variant="body1">From: {nationality}</Font>
        <Container align="center">
          <Button variant="contained" color="primary" onClick={this.open}>
            <Font variant="button">Edit Details</Font>
          </Button>
        </Container>

        <Modal open={this.state.open} style={style.modal}>
          <FormControl
            component="form"
            onSubmit={(this.props.handleSubmit, this.close)}
            style={style.form}
          >
            <TextField
              rows="3"
              variant="outlined"
              margin="normal"
              multiline
              label="About Me"
              required
              onChange={e => this.props.handleChange(e)}
              name="bio"
            />
            <RadioGroup
              row
              onChange={this.props.handleChange}
              defaultValue="other"
              name="gender"
            >
              <FormLabel component="legend">Gender</FormLabel>
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                labelPlacement="start"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                labelPlacement="start"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                labelPlacement="start"
              />
            </RadioGroup>
            <TextField
              label="Age"
              type="number"
              required
              onChange={this.props.handleChange}
              name="age"
            />
            <TextField
              label="Where are you from?"
              type="text"
              required
              onChange={this.props.handleChange}
              name="nationality"
            />
            <Button
              type="submit"
              value="submit"
              name="submit"
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </FormControl>
        </Modal>
      </>
    );
  }
}
const style = {
  form: {
    backgroundColor: "white",
    padding: "15px"
  },
  modal: {
    textAlign: "center",
    marginTop: "60px"
  }
};
export default UserAttr;
