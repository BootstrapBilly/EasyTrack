import React from "react";
import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const Input = ({ name, label, type = "text", validation, hide }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (hide) return null;

  return (
    <div className="mb-2">
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        type={type}
        {...register(name, { ...validation })}
        error={[name] in errors}
        helperText={[name] in errors && errors[name].message}
      />
    </div>
  );
};

export default Input;
