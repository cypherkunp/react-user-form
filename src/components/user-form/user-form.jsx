import React, { Component } from 'react';
import UserDetailsForm from '../user-details-form/user-details-form';
import UserIdForm from '../user-id-form/user-id-form';
import Confirm from '../confirm/confirm';

export class UserForm extends Component {
  state = {
    step: 1,
    userData: { firstName: '', lastName: '', email: '', occupation: '', city: '', bio: '' },
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    const { userData } = this.state;
    console.log(input, e);

    this.setState({ userData: { ...userData, [input]: e.target.value } });
  };

  render() {
    const { step } = this.state;
    const { userData } = this.state;

    switch (step) {
      case 1:
        return (
          <UserIdForm nextStep={this.nextStep} handleChange={this.handleChange} data={userData} />
        );

      case 2:
        return (
          <UserDetailsForm
            nextStep={this.nextStep}
            prevStep={this.previousStep}
            handleChange={this.handleChange}
            data={userData}
          />
        );

      case 3:
        return <Confirm nextStep={this.nextStep} prevStep={this.previousStep} data={userData} />;
      default:
        return <h1> Success, Details are saved.</h1>;
    }
  }
}

export default UserForm;
