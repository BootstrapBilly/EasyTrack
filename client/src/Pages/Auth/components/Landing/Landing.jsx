import React from "react";
import { Button } from "@material-ui/core";
import Background from "../../../../Assets/Auth-background.svg";

const Landing = ({ onSwitch }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className={`flex pt-20 pb-10`}>
        <img src={Background} className="px-8" alt="logo" />
      </div>
      <div className="px-5 flex flex-col items-center">
        <h2 className="text-2xl font-mono">EasyTrack</h2>
        <h2 className="text-4xl text-center font-extralight">
          SLOGAN TO BE DETERMINED
        </h2>
      </div>
      <div className="flex w-full px-5 mt-16">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="h-12 shadow"
          type="submit"
          onClick={onSwitch}
        >
          LETS GO!
        </Button>
      </div>
    </div>
  );
};

export default Landing;