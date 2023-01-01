import React from "react";
import { useCurrentStepContext } from "../contexts/CurrentStepContext";

const StepperControl = ({ steps }) => {
  const { currentStep, setCurrentStep } = useCurrentStepContext();

  // Increments / Decrements the current step data (1-4)
  const handleClick = (direction) => {
    // Takes either next / back direction.
    let nextStep = currentStep;

    direction === "next" ? nextStep++ : nextStep--;
    // check if steps are within bounds
    nextStep > 0 && nextStep <= steps.length && setCurrentStep(nextStep);
  };
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? "cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperControl;
