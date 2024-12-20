import React, { useContext } from "react";
import Step01 from "./Step01";
import Step02 from "./Step02";
import Step03 from "./Step03";
import { FormContext } from "./store/FormProvider";

const Form = () => {
  const { step } = useContext(FormContext);

  return (
    <div>
      {step === 1 && <Step01 />}
      {step === 2 && <Step02 />}
      {step === 3 && <Step03 />}
    </div>
  );
};

export default Form;
