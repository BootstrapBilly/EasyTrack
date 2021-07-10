import React from "react";
import { useFormContext } from "react-hook-form";

const Switcher = ({ text, onClick }) => {
  const { clearErrors } = useFormContext();

  const handleClick = () => {
    clearErrors();
    onClick();
  };

  return (
    <button
      className="text-sm font-bold text-brand"
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Switcher;
