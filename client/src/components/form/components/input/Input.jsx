import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { preSanitizationCheck } from "@billyjames/util-packages";

const Input = ({ 
  name, 
  validation, 
  hide, 
  onChange, 
  maxLength = undefined, 
  className = "",
  reference,
  canHaveNoFieldError, 
  onKeyUp,
  ...props 
}) => {
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
    <div className={`flex items-center relative ${className}`} data-testid={`input__${name}`}>
      <TextField
        variant="outlined"
        fullWidth
        {...register(name, { 
          ...validation,
          validate: {
            ...validation.custom,
            bannedChars: (value) => {
              const bannedChar = preSanitizationCheck({ value });
              if(bannedChar) return `"${bannedChar}" is not allowed`
            },
          }, 
        })}
        {...props}
        error={[name] in errors}
        helperText={[name] in errors && errors[name].message}
        type={showPassword ? "text" : props.type || "text"}
        onKeyDown={handleChange}
        inputProps={{ maxLength }}
        inputRef={reference}
        onKeyUp={onKeyUp}
        onKeyPress={onKeyUp}
      />
       {props.type === "password" && (
        <FontAwesomeIcon
          data-testid="input__show-password"
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? "eye-slash" : "eye"}
          className="absolute fixed right-2 top-5 text-grey-medium"
        />
      )}
    </div>
  );
};

Input.defaultProps = {
  onChange: () => {},
  onKeyUp: () => {},
}

export default Input;
