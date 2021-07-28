import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../requests";
import { loginSuccess, signupSuccess, setBackendErrors } from "../../../../store/actions";
import { Form } from "../../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { checkRequiredValue as valueMissing, validateEmailAddress as invalidEmail } from "@billyjames/util-packages";
import commonPassword from "common-password-checker";
import { AuthenticationStatus } from "../../../../constants";
import { switchAuthenticationStatus } from "../../../../store/actions";

const { LANDING, LOGIN, SIGNUP } = AuthenticationStatus;

const AuthForm = () => {
  const { authenticationStatus, backendErrors } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSwitchMode = ({ showLanding } = { showLanding: false }) => {

    dispatch(setBackendErrors([]));

    if (showLanding) return dispatch(switchAuthenticationStatus({ status: LANDING }));

    if (authenticationStatus === LOGIN) return dispatch(switchAuthenticationStatus({ status: SIGNUP }));
    return dispatch(switchAuthenticationStatus({ status: LOGIN }));
    
  };

  const handleLogin = async (formData) => {
    try {
      const { data } = await login(formData);
      dispatch(loginSuccess(data));
    } 
    catch ({ response: { data } }) {
      dispatch(setBackendErrors([{ name: "email", message: "" }, { name: "password", message: "" }, { name: "noField", message: data.message }]));
    }
  };

  const handleSignup = async (formData) => {
    try {
      const { data } = await signup(formData);
      dispatch(signupSuccess(data));
    } 
    catch ({ response: { data } }) {
      dispatch(setBackendErrors([{ name: data.field, message: data.message }]))
    }
  };

  const onSubmit = (data) => {
    if (authenticationStatus === LOGIN) {
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
        onClick={() => handleSwitchMode({ landing: true })}
      >
        <FontAwesomeIcon icon="chevron-left" />
        <span>Back</span>
      </button>

      <div className="w-full mb-2 flex justify-end">
        <Form.Switcher
          onClick={handleSwitchMode}
          text={
            authenticationStatus === SIGNUP
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
            length3: (username) => !valueMissing({ value: username }, { length: 3 }) || "Username must be at least 3 characters",
          },
        }}
        hide={authenticationStatus === LOGIN}
        autoComplete="off"
        className="mb-4"
      />

      <Form.Input
        name="email"
        label="Email address"
        validation={{
          required: "Email Address is required",
          validate: {
            validEmail: (email) => !invalidEmail(email) || "Enter a valid email address",
            noSpaces: (email) => !email.includes(" ") || "Email cannot have spaces",
          },
        }}
        canHaveNoFieldError={authenticationStatus === LOGIN}
        className="mb-4"
      />
      
      <Form.Input
        name="password"
        label="Password"
        type="password"
        validation={{
          validate: {
            length8: (password) => !valueMissing({ value: password }, { length: 8 }) || "Password must be at least 8 characters",
            common: (password) => !commonPassword(password) || "Common password, use a better one",
          },
        }}
        canHaveNoFieldError={authenticationStatus === LOGIN}
        className="mb-4"
      />

      <Form.Error className="px-2" />

      <div className="mt-8 flex flex-col items-center w-full">
        <Form.Submit
          text={authenticationStatus === SIGNUP ? "CREATE ACCOUNT" : "LOG IN"}
        />
      </div>

    </Form>
  );
};

export default AuthForm;
