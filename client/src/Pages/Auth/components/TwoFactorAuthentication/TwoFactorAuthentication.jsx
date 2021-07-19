import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Lock from "../../../../Assets/2fa-lock.svg";
import { Offer2fa, Collect2fa, Verify2fa } from "./components";
import { switchAuthenticationStatus } from "../../../../store/actions";
import { AuthenticationStatus } from "../../../../constants";

const { AUTHENTICATED, COLLECT2FAPHONENUMBER, VERIFY2FA } = AuthenticationStatus;

const TwoFactorAuthentication = () => {
  const dispatch = useDispatch();
  const { authenticationStatus } = useSelector((state) => state.auth);

  const handleNoThanks = () =>  dispatch(switchAuthenticationStatus({status: AUTHENTICATED}))

  const component = useMemo(() => {
      switch(authenticationStatus){
        default: return <Offer2fa handleNoThanks={handleNoThanks}/>;
        case COLLECT2FAPHONENUMBER: return <Collect2fa handleNoThanks={handleNoThanks} />;
        case VERIFY2FA: return <Verify2fa />;
      }
  }, [authenticationStatus])

  return(
    <div className={`flex flex-col pt-6 pb-10 items-center px-10`}>
        <h2 className="text-4xl pb-6 text-center font-extralight">
          2 Factor Authentication
        </h2>
        <img src={Lock} className="px-8 h-32" alt="Lock icon - locked by ibrandify from the Noun Project" longdesc="https://thenounproject.com/search/?q=lock&i=2249572" />
        
        {component}

    </div>
  )
};

export default TwoFactorAuthentication;
