import React from "react";
import { useFormContext } from "react-hook-form";

const Error = ({ className }) => {
  const {
    formState: {
      errors: { noField: error },
    },
  } = useFormContext();

  return (
    <div className={`text-red text-sm ${className}`}>{error?.message}</div>
  );
};

export default Error;
