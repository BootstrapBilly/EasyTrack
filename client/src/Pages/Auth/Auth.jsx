import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { AuthForm, Landing, TwoFactorAuthentication } from "./components";
import { AuthenticationStatus } from "../../constants";

const { LANDING, SIGNUP, LOGIN, OFFER2FA, AUTHENTICATED } =
  AuthenticationStatus;

const Auth = () => {
  const { authenticationStatus } = useSelector((state) => state.auth);

  const component = useMemo(() => {
    switch (authenticationStatus) {
      default: case LANDING: return <Landing />;

      case LOGIN: case SIGNUP: return <AuthForm />
      case OFFER2FA: return <TwoFactorAuthentication />;
      case AUTHENTICATED: return <div>a</div>
    }
  }, [authenticationStatus]);

  return <div className="w-screen h-screen">{component}</div>;
};

export default Auth;
