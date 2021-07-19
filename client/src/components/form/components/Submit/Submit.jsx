import React from "react";
import { Button } from "@material-ui/core";

const Submit = ({ text, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="h-12 shadow"
        type="submit"
      >
        {text}
      </Button>
    </div>
  );
};

export default Submit;
