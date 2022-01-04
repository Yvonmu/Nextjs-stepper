/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        // {
        //   description: "Login",
        //   completed: true,
        //   selected: true,
        //   highlighted: false,
        // },
        // {
        //     description: "Shipping Address",
        //     completed: false,
        //     selected: true,
        //     highlighted: true,
        //   },
        //   {
        //     description: "Add payment",
        //     completed: false,
        //     selected: false,
        //     highlighted: false,
        //   },
        //   {
        //     description: "Overview",
        //     completed: false,
        //     selected: false,
        //     highlighted: false,
        //   },
      ],
    };
  }

  componentDidMount() {
    //   complete to show a check mark
    //   selected to fill the step with color
    //   highlighted to make the description bold
    const { steps, currentStepNumber } = this.props;
    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });

    const currentSteps = this.updateStep(currentStepNumber -1, stepsState);

    this.setState({
      steps: currentSteps,
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.currentStepNumber!==this.props.currentStepNumber){
        const {steps}=this.state;
        const currentSteps = this.updateStep(this.props.currentStepNumber -1, steps);

        this.setState({
        steps: currentSteps,
        });
    }
  }

  updateStep(stepNumber, steps) {
    const newSteps = [...steps];

    //   1current step
    //   2past step
    //   3future step
    let stepCounter = 0;
    while (stepCounter < newSteps.length) {
      //   current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }
      // future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }

  render() {
    // const { steps } = this.props;
    const { steps } = this.state;
    const stepsDisplay = steps.map((step, index) => {
      return (
        <div className="step-wrapper" key={index}>
          <div
            className={`step-number ${
              step.selected ? "step-number-active" : "step-number-disabled"
            }`}
          >
            {step.completed ? <span>&#10003;</span> : index + 1}
          </div>
          <div
            className={`step-description ${
              step.highlighted && "step-description-active"
            }`}
          >
            {step.description}
          </div>
          <div
            className={
              index !== steps.length - 1 ?
              `divider-line divider-line-${steps.length}`:""
            }
          />
        </div>
      );
    });
    return (<div className="stepper-wrapper-horizontal">{stepsDisplay}</div>);
  }
}

// Stepper.prototype={
//     steps: PropTypes.array.isRequired
// }
