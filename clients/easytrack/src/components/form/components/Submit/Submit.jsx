import React from "react";
import { Button } from "@material-ui/core";

const Submit = ({ text, className, color }) => {
  return (
    <div className={`w-full ${className}`}>
      <Button
        variant="contained"
        color={color || "primary"}
        fullWidth
        className="h-12 shadow"
        type="submit"
        style={{fontWeight: 500}}
      >
        {text}
      </Button>
    </div>
  );
};

export default Submit;
