import React, { useState } from "react";
import { Form } from "../../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

const AuthForm = ({ onSwitch }) => {
  const [mode, setMode] = useState(SIGNUP);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleSwitchMode = () => {
    if (mode === LOGIN) return setMode(SIGNUP);
    return setMode(LOGIN);
  };
  return (
    <Form onSubmit={onSubmit} className="p-5">
      <button
        type="button"
        className="text-sm text-brand flex w-11 items-center justify-between"
        onClick={onSwitch}
      >
        <FontAwesomeIcon icon="chevron-left" />
        Back
      </button>
      <div className="w-full mb-2 flex justify-end">
        <Form.Switcher
          onClick={handleSwitchMode}
          text={
            mode === SIGNUP
              ? "Already have an account? Tap here"
              : "Need to sign up? Tap here"
          }
        />
      </div>
      <Form.Input
        name="username"
        label="Username"
        validation={{
          validate: {
            length3: (v) =>
              v.length > 2 || "Username must be at least 3 characters",
          },
        }}
        hide={mode === LOGIN}
      />
      <Form.Input
        name="email"
        label="Email address"
        validation={{
          required: "Email Address is required",
        }}
      />
      <Form.Input
        name="password"
        label="Password"
        validation={{
          required: "Password is required",
        }}
      />
      <Form.Input
        name="repeatPassword"
        label="Repeat password"
        validation={{
          required: "Repeat password is required",
        }}
        hide={mode === LOGIN}
      />
      <div className="mt-8 flex flex-col items-center">
        <Form.Submit text={mode === SIGNUP ? "CREATE ACCOUNT" : "LOG IN"} />
      </div>
    </Form>
  );
};

export default AuthForm;
