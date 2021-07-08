import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import Background from "../../../Assets/Auth-background.svg";

const Landing = () => {
  const [currentAuth, setCurrentAuth] = useState("LOGIN");
  const [inputs, setInputs] = useState([
    { name: "Email address", value: "" },
    { name: "Password", value: "", type: "password" },
  ]);

  const handleToggleAuth = () => {
    // switch(currentAuth){
    //   case
    // }
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-grow items-start">
        <img src={Background} className="p-10" alt="logo" />
      </div>

      <div className="px-5 flex flex-col h-4/6">
        {inputs.map(({ name, value, type }) => (
          <div className="mb-2">
            <TextField
              label={name}
              variant="outlined"
              fullWidth
              value={value}
              type={type ? type : "text"}
              onChange={({ target }, name) => {
                console.log(target.value);
                console.log(name);
              }}
            />
          </div>
        ))}
        <div className="mt-8 flex flex-col items-center">
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="h-12 shadow"
          >
            Log In
          </Button>
          <button
            className="mt-3 text-sm"
            type="button"
            onClick={handleToggleAuth}
          >
            Need to register? Tap <b>here</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
