import React, { useState, useEffect, useRef } from "react";
import { useCurrentStepContext } from "../contexts/CurrentStepContext";
const Stepper = ({ steps }) => {
  // THis is also a read only component.
  const { currentStep } = useCurrentStepContext();
  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef(); //Initialsized without an initial value in the current prop.

  /* Function to update the fattened steps accordingly.Parameters to update :-
     If the step has been :- Highlighted , Completed or/and selected. */
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps]; //Contains the fattened steps.
    let count = 0;
    // While the count is less that 4 ... It loops 3 times.
    while (count < newSteps.length) {
      if (count === stepNumber) {
        // Case 1 : To the Icon at/equal to the current position.
        newSteps[count] = {
          // We are spreading inorder to be able to update content.
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }

      // Case 2 : To the Icon behind/less than the current position
      // The have already been highlighted, selected and completed.So we apply this set of properties.
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // Case 3 : To the Icons beyond the current position.
      // The are yet highlighted, selected and completed.
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    // We are recreating the steps array.
    const stepsState = steps.map((step, index) =>
      Object.assign(
        //Takes in two parameters , the target object and the source object.Copy pastes values from source object to target object.
        {}, // The Target object to be updated.
        {
          //The values to be copied to the target object
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    // Similar use to useState only that shit doesnt rerender everytime the state changes.
    stepsRef.current = stepsState; //This is the value to be persisted accross rerenders.
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={` ${index == newStep.length - 1 ? "" : "w-full"}
          ${
            index !== newStep.length - 1
              ? " flex items-center"
              : "flex items-center"
          }`}
      >
        <div className="relative flex flex-col items-center justify-center  text-black">
          {/* Deals with the surrounding. */}
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected
                ? "border-4 border-primary text-primary font-bold "
                : ""
            } ${step.completed ? "bg-primary" : ""}`}
          >
            {/*Displays a number or an icon.*/}
            {step.completed ? (
              // Deals with the number/symbol
              <span className="text-white font-bold text-xl">&#10003;</span> //Fancy code for the checked html symbol
            ) : (
              index + 1
            )}
          </div>
          {/* Deals with the description. */}
          <div
            className={`absolute text-center mt-24 w-32 text-xs font-medium uppercase phone:hidden ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>
        {/* DEALS WITH THE LINE. */}
        <div
          className={`w-full h-0.5 transition duration-500 ease-in-out  ${
            step.completed ? "bg-primary" : "bg-gray-300 "
          } ${index == newStep.length - 1 ? "hidden" : ""} `}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex justify-between items-center w-full">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;
