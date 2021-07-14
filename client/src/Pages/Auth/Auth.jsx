import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthForm, Landing } from "./components";
import { login, signup } from "./requests";
import { loginSuccess } from "../../store/actions";

const Auth = () => {
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [backendErrors, setBackendErrors] = useState([]);

  const handleSwitch = () => setShowForm(!showForm);

  const handleLogin = async (formData) => {
    try {
      const { data } = await login(formData);

      dispatch(loginSuccess(data));
    } catch ({ response: { data } }) {
      console.log(data);
      setBackendErrors([
        { name: "email", message: "" },
        { name: "password", message: "" },
        { name: "noField", message: data.message },
      ]);
    }
  };

  const handleSignup = async (formData) => {
    try {
      const { data } = await signup(formData);
      console.log(data);
    } catch ({ response: { data } }) {
      console.log(data);
      setBackendErrors([{ name: data.field, message: data.message }]);
    }
  };
  return (
    <div className="w-screen h-screen">
      {showForm ? (
        <AuthForm
          handleSwitchToLanding={handleSwitch}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          backendErrors={backendErrors}
        />
      ) : (
        <Landing handleSwitchToForm={handleSwitch} />
      )}
    </div>
  );
};

export default Auth;
