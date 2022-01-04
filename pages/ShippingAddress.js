import React, { Component } from 'react';
import Stepper from './Stepper/Stepper';

export default class ShippingAddress extends Component {
  constructor() {
    super();
  this.setState({
    currentStep: 3,
  });
}

  render() {
    const stepsArray = ["Login", "Shipping Address", "Add payment", "Overview"];
    const { currentStep } = this.state;
    return (
      <div>
            <Stepper steps={stepsArray} currentStepNumber={currentStep} />
        </div>
    )
  }
}


