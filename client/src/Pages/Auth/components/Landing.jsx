import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Background from "../../../Assets/Auth-background.svg";
import { Input, Form } from "../../../components";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

const Landing = () => {
  const [mode, setMode] = useState(LOGIN);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSwitchMode = () => {
    if (mode === LOGIN) return setMode(SIGNUP);
    return setMode(LOGIN);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={`flex flex-grow items-start ${mode === SIGNUP && "hidden"}`}
      >
        <img src={Background} className="p-10 pb-0" alt="logo" />
      </div>

      <div className="px-5 flex flex-col h-4/6 mt-10">
        <Form onSubmit={onSubmit}>
          <Input
            name="username"
            label="Username"
            validation={{
              required: "Username is required",
            }}
            hide={mode === LOGIN}
          />
          <Input
            name="email"
            label="Email address"
            validation={{
              required: "Email Address is required",
            }}
          />
          <Input
            name="password"
            label="Password"
            validation={{
              required: "Password is required",
            }}
          />
          <Input
            name="repeatPassword"
            label="Repeat password"
            validation={{
              required: "Repeat password is required",
            }}
            hide={mode === LOGIN}
          />
          <div className="mt-8 flex flex-col items-center">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="h-12 shadow"
              type="submit"
            >
              Log In
            </Button>
            <button
              className="mt-3 text-sm"
              type="button"
              onClick={handleSwitchMode}
            >
              Need to register? Tap <b>here</b>
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Landing;
