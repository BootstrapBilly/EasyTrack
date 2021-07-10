import React, { useState } from "react";
import { AuthForm, Landing } from "./components";

const Auth = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSwitch = () => setShowForm(!showForm);
  return (
    <div className="w-screen h-screen">
      {showForm ? (
        <AuthForm onSwitch={handleSwitch} />
      ) : (
        <Landing onSwitch={handleSwitch} />
      )}
    </div>
  );
};

export default Auth;
