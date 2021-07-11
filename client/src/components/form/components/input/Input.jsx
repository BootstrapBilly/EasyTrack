import React from "react";
import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const Input = ({ name, validation, hide, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (hide) return null;

  return (
    <div className="mb-2">
      <TextField
        variant="outlined"
        fullWidth
        {...register(name, { ...validation })}
        error={[name] in errors}
        helperText={[name] in errors && errors[name].message}
        {...props}
      />
    </div>
  );
};

export default Input;
