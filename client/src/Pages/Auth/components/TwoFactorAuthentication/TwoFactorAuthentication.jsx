import React from "react";
import { useDispatch } from "react-redux";
import Lock from "../../../../Assets/2fa-lock.svg";
import { Button } from "../../../../components";
import { switchAuthenticationStatus } from "../../../../store/actions";
import { AuthenticationStatus } from "../../../../constants";

const { AUTHENTICATED } = AuthenticationStatus;

const TwoFactorAuthentication = () => {
  const dispatch = useDispatch();

  const handleNo = () => {
    dispatch(switchAuthenticationStatus({status: AUTHENTICATED}))
  }

  return(
    <div className={`flex flex-col pt-6 pb-10 items-center px-10`}>
        <h2 className="text-4xl pb-6 text-center font-extralight">
          2 Factor Authentication
        </h2>
        <img src={Lock} className="px-8 h-32" alt="Lock icon - locked by ibrandify from the Noun Project" longdesc="https://thenounproject.com/search/?q=lock&i=2249572" />
        <h2 className="text-2xl pb-6 text-center font-extralight py-5">
          Would you like to add an authenticator for extra security ?
        </h2>

        <span className="py-3 text-grey-medium">This can be added later</span>
        <div className="flex w-full justify-between">
          <Button variant="danger" style={{width: "47%"}} onClick={handleNo}>No</Button>
          <Button variant="success" style={{width: "47%"}}>Yes</Button>
        </div>
    </div>
  )
};

export default TwoFactorAuthentication;
