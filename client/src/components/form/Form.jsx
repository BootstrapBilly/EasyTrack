import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Input, Switcher, Submit } from "./components";

const Form = ({ children, onSubmit, className }) => {
  const methods = useForm({ mode: "onChange" });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Switcher = Switcher;
Form.Submit = Submit;

export default Form;
