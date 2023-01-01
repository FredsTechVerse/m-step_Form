import { createContext, useContext, useState } from "react";

// Creating Context.
// =================
const StepperContext = createContext({ userData: "", setUserData: null });

// Giving context a value via the context provider.
// =================================================
export function StepperContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

// CONSUMING CONTEXT MADE EASY.
//=============================
export function useStepperContext() {
  return useContext(StepperContext);
}
