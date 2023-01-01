import { StepperContextProvider } from "./contexts/StepperContext";
import { useCurrentStepContext } from "./contexts/CurrentStepContext";
import {
  Stepper,
  StepperControl,
  Account,
  Details,
  Payment,
  Final,
} from "./components";

function App() {
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
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} />

        <div className="my-10 p-10 ">
          {/* Exposing Context to the respective form. */}
          <StepperContextProvider>
            {displayStep(currentStep)}
          </StepperContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl currentStep={currentStep} steps={steps} />
      )}
    </div>
  );
}

export default App;
