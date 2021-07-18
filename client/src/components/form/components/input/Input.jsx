import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ name, validation, hide, onChange, canHaveNoFieldError, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const { noField: hasNoFieldError } = errors;
  
  const handleChange = ({target}) => {
    if(canHaveNoFieldError && hasNoFieldError){
      clearErrors();
    }
    onChange(target.value);
  }

  if (hide) return null;

  return (
    <div className="mb-2 flex items-center relative">
      <TextField
        variant="outlined"
        fullWidth
        {...register(name, { ...validation })}
        error={[name] in errors}
        helperText={[name] in errors && errors[name].message}
        {...props}
        type={showPassword ? "text" : props.type || "text"}
        onChange={handleChange}
      />
      {props.type === "password" && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? "eye-slash" : "eye"}
          className="absolute right-2 text-grey-medium"
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
}

export default Input;
