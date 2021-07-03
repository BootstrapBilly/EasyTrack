import React from "react";
import { Button } from "@material-ui/core";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-grow"></div>

      <div className="h-28 px-5 flex flex-col">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="h-12 shadow"
        >
          Log In
        </Button>
        <span className="mt-3 text-sm self-center">
          Need to register? Tap <b>here</b>
        </span>
      </div>
    </div>
  );
};

export default Landing;
