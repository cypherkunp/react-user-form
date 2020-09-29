import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import styles from './user-details-form.module.css';

export class UserDetailsForm extends Component {
  handleContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
            <Typography variant="h6">Enter User Details - Continued</Typography>
          </Toolbar>
        </AppBar>
        <div className={styles['user-form']}>
          <TextField
            id="user-occupation"
            label="Occupation"
            defaultValue={data.occupation}
            onChange={handleChange('occupation')}
          />
          <TextField
            id="user-bio"
            label="Bio"
            defaultValue={data.bio}
            onChange={handleChange('bio')}
          />
          <TextField
            id="user-city"
            label="City"
            defaultValue={data.city}
            onChange={handleChange('city')}
          />
          <div className={styles['button-area']}>
            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              onClick={this.handleContinue}
            >
              Continue
            </Button>

            <Button
              className={styles.button}
              variant="contained"
              color="primary"
              onClick={this.handleBack}
            >
              Back
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetailsForm;
