import React, { Component } from "react";
import Stepper from "./Stepper/Stepper";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 2,
    };
  }

  handleClick = (clickType) => {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    this.setState({
      currentStep: newStep,
    });
  };

  render() {
    const stepsArray = ["Login", "Shipping Address", "Add payment", "Overview"];
    const { currentStep } = this.state;

    return (
      <>
        <div className="stepper-container-horizontal">
          <Stepper steps={stepsArray} currentStepNumber={currentStep} />
          jghkgh
        </div>

        <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div>
      </>
    );
  }
}
