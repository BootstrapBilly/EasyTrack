import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Error, ExerciseAdder, Input, Submit, Switcher } from "./components";

const Form = ({ children, onSubmit, className, customErrors }) => {
  const methods = useForm({ mode: "onChange" });
  const { handleSubmit, setError} = methods;
  
  useEffect(() => {
    if (customErrors?.length) {
      customErrors.forEach(({ name, message }) =>
        setError(name, {
          type: "manual",
          message,
        })
      );
    }
  }, [customErrors]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className} data-testid="form__container">
        {children}
      </form>
    </FormProvider>
  );
};

Form.Error = Error;
Form.ExerciseAdder = ExerciseAdder;
Form.Input = Input;
Form.Submit = Submit;
Form.Switcher = Switcher;

export default Form;
