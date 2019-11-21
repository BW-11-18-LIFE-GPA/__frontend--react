import React, { Component } from "react";
import { Typography as Font, Button, Modal, Input ,RadioGroup,Radio,TextField,FormGroup, FormControl, FormLabel, FormControlLabel} from "@material-ui/core";

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
        <Button variant="contained" color="primary" onClick={this.open}>
          Edit Details
        </Button>
        <Modal open={this.state.open} onClose={this.close}>
            <FormControl component= 'form'>
                <TextField rows='3' variant='outlined' margin='normal' multiline label='About Me' required/>
                <RadioGroup row>
                    <FormLabel component='legend'>Gender</FormLabel>
                    <FormControlLabel value='male' control={<Radio/>} label='Male' labelPlacement='start'/>
                    <FormControlLabel value='female' control={<Radio/>} label='Female' labelPlacement='start'/>
                    <FormControlLabel value='other' control={<Radio/>} label='Other' labelPlacement='start'/>
                </RadioGroup>
                    <TextField label='Age' type='number' required/>
                    <TextField label='Where are you from?' type='text' required/>
                    <Button type='submit' value='submit' name='submit' variant='outlined' color='primary'>Submit</Button>
            </FormControl>
        </Modal>
      </>
    );
  }
}
export default UserAttr;
