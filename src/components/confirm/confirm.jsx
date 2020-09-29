import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import styles from './confirm.module.css';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      data: { firstName, lastName, email, occupation, city, bio },
      handleChange,
    } = this.props;

    console.log(this.props);
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="default" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Enter User Details</Typography>
          </Toolbar>
        </AppBar>
        <div className={styles['user-form']}>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <div className={styles['button-area']}>
            <Button variant="contained" color="primary" onClick={this.continue}>
              Continue
            </Button>
            <Button variant="contained" color="primary" onClick={this.back}>
              Back
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
