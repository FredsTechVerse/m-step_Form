import React, { createContext, useContext, useState } from "react";
// Creating Context
const CurrentStepContext = createContext();
// Appending a value to contect via provider.
export const CurrentStepContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1); //It's human which we need to convert to computer.

  return (
    <CurrentStepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </CurrentStepContext.Provider>
  );
};

// Consuming context
export function useCurrentStepContext() {
  return useContext(CurrentStepContext);
}

export default CurrentStepContextProvider;
