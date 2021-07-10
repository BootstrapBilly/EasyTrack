import React from "react";
import { Button } from "@material-ui/core";

const Submit = ({ text }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      className="h-12 shadow"
      type="submit"
    >
      {text}
    </Button>
  );
};

export default Submit;
