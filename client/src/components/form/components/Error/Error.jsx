import React from "react";
import { useFormContext } from "react-hook-form";

const Error = () => {
  const {
    formState: {
      errors: { noField: error },
    },
  } = useFormContext();

  return <div>{error?.message}</div>;
};

export default Error;
