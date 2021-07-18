import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Lock from "../../../../Assets/2fa-lock.svg";
import { Prompt, Form2fa } from "./components";
import { switchAuthenticationStatus } from "../../../../store/actions";
import { AuthenticationStatus } from "../../../../constants";

const { AUTHENTICATED } = AuthenticationStatus;

const TwoFactorAuthentication = () => {
  const dispatch = useDispatch();

  const [showForm2fa, setShowForm2fa] = useState(false);

  const handleNo = () => {
    dispatch(switchAuthenticationStatus({status: AUTHENTICATED}))
  }

  const handleYes = () => {
    setShowForm2fa(true);
  }

  return(
    <div className={`flex flex-col pt-6 pb-10 items-center px-10`}>
        <h2 className="text-4xl pb-6 text-center font-extralight">
          2 Factor Authentication
        </h2>
        <img src={Lock} className="px-8 h-32" alt="Lock icon - locked by ibrandify from the Noun Project" longdesc="https://thenounproject.com/search/?q=lock&i=2249572" />

        {showForm2fa ? <Form2fa handleNo={handleNo} /> : <Prompt handleNo={handleNo} handleYes={handleYes} />}

    </div>
  )
};

export default TwoFactorAuthentication;
