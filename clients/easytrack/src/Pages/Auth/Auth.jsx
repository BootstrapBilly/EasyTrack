import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { AuthForm, Landing, TwoFactorAuthentication } from "./components";
import { AuthenticationStatus } from "../../constants";

const { LANDING, SIGNUP, LOGIN, OFFER2FA, COLLECT2FAPHONENUMBER, VERIFY2FA } = AuthenticationStatus;

const Auth = () => {
  const { authenticationStatus } = useSelector((state) => state.auth);

  const component = useMemo(() => {
    switch (authenticationStatus) {
      default: case LANDING: return <Landing />;

      case LOGIN: case SIGNUP: return <AuthForm />;
      case OFFER2FA: case COLLECT2FAPHONENUMBER: case VERIFY2FA: return <TwoFactorAuthentication />;
    }
  }, [authenticationStatus]);

  return <div className="w-screen h-screen overflow-hidden">{component}</div>;
};

export default Auth;
