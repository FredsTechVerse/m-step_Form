import { StepperContextProvider } from "../contexts/StepperContext";
import { useCurrentStepContext } from "../contexts/CurrentStepContext";
import {
  Stepper,
  StepperControl,
  Account,
  Details,
  Payment,
  Final,
  FormHeader,
} from "../components";

function Registration() {
  //Everything here just reads the context.
  const { currentStep } = useCurrentStepContext();

  //  Stepper Info Data..
  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete",
  ];
  // Displays the respective form depending on the current step data.
  // ================================================================
  const displayStep = (pos) => {
    //Get's the current step data from context which is updated globally.
    switch (pos) {
      case 1:
        return <Account steps={steps} />;
      case 2:
        return <Details steps={steps} />;
      case 3:
        return <Payment steps={steps} />;
      case 4:
        return <Final />;
      default:
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg flex flex-col items-center justify-center ">
      <div
        className="flex  flex-col items-center justify-center w-4/5 phone:w-full phone:px-0 bg-white border-2 border-red-600 p-4 
      "
      >
        {/* Stepper. Our navigation mechanism. */}
        <Stepper steps={steps} />
        <FormHeader heading={steps[currentStep - 1]} />

        <div className="my-5 w-full">
          {/* Exposing Context to the respective form. */}

          <StepperContextProvider>
            {displayStep(currentStep)}
          </StepperContextProvider>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl currentStep={currentStep} steps={steps} />
        )}
      </div>
    </div>
  );
}

export default Registration;
