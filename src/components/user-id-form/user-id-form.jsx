import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import styles from './user-id-form.module.css';

export class UserIdForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { data, handleChange } = this.props;

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
          <TextField
            id="first-name"
            label="First Name"
            defaultValue={data.firstName}
            onChange={handleChange('firstName')}
          />
          <TextField
            id="last-name"
            label="Last Name"
            defaultValue={data.lastName}
            onChange={handleChange('lastName')}
          />
          <TextField
            id="email-id"
            label="Email Id"
            defaultValue={data.email}
            onChange={handleChange('email')}
          />
          <div className={styles['button-area']}>
            <Button variant="contained" color="primary" onClick={this.continue}>
              Continue
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserIdForm;
