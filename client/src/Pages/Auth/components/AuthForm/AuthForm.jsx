import React, { useState, useEffect } from "react";
import { Form } from "../../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  checkRequiredValue as valueMissing,
  validateEmailAddress as invalidEmail,
} from "@billyjames/util-packages";
import commonPassword from "common-password-checker";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";

const AuthForm = ({
  handleSwitchToLanding,
  handleSignup,
  handleLogin,
  backendErrors,
}) => {
  const [mode, setMode] = useState(SIGNUP);
  const [password, setPassword] = useState("");

  const handleSwitchMode = () => {
    if (mode === LOGIN) return setMode(SIGNUP);
    return setMode(LOGIN);
  };

  const onSubmit = (data) => {
    if (mode === LOGIN) {
      const { email, password } = data;
      return handleLogin({ email, password });
    }
    return handleSignup(data);
  };

  return (
    <Form onSubmit={onSubmit} className="p-5" customErrors={backendErrors}>
      <button
        type="button"
        className="text-sm text-brand flex w-11 items-center justify-between"
        onClick={handleSwitchToLanding}
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
            length3: (username) =>
              !valueMissing({ value: username }, { length: 3 }) ||
              "Username must be at least 3 characters",
          },
        }}
        hide={mode === LOGIN}
        autoComplete="off"
      />
      <Form.Input
        name="email"
        label="Email address"
        validation={{
          required: "Email Address is required",
          validate: {
            validEmail: (email) =>
              !invalidEmail(email) || "Enter a valid email address",
          },
        }}
      />
      <Form.Input
        name="password"
        label="Password"
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        validation={{
          validate: {
            length8: (password) =>
              !valueMissing({ value: password }, { length: 8 }) ||
              "Password must be at least 8 characters",
            common: (password) =>
              !commonPassword(password) || "Common password, use a better one",
          },
        }}
      />
      <Form.Input
        name="repeatPassword"
        label="Repeat password"
        type="password"
        validation={{
          validate: {
            passwordsMatch: (repeatPassword) =>
              repeatPassword === password || "Passwords must match",
          },
        }}
        hide={mode === LOGIN}
      />
      <Form.Error />
      <div className="mt-8 flex flex-col items-center">
        <Form.Submit text={mode === SIGNUP ? "CREATE ACCOUNT" : "LOG IN"} />
      </div>
    </Form>
  );
};

export default AuthForm;
