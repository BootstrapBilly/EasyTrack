import { Auth, Dashboard } from "./Pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AuthenticationStatus } from "./constants";

const { AUTHENTICATED } = AuthenticationStatus;

library.add(faChevronLeft, faEye, faEyeSlash);

const App = () => {
  const { userId, authenticationStatus } = useSelector((state) => state.auth);

  if(!userId || authenticationStatus !== AUTHENTICATED) return <Auth />

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
