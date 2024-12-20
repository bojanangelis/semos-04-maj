import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <FormContext.Provider value={{ step, handleNextStep, handlePreviousStep }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
