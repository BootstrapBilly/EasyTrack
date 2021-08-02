import { useEffect } from "react";
import { Auth, Dashboard } from "./Pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "./constants";
import { refreshSession } from "./store/actions";

library.add(faChevronLeft, faEye, faEyeSlash);

const App = () => {
  const dispatch = useDispatch();
  const { userId, authenticationStatus } = useSelector((state) => state.auth);

  const checkAccessToken = async () => {
    const { data } = await axios({
      method: 'get',
      headers: { "Content-Type": "application/json" },
      url: `${BACKEND_URL}/refresh_token`,
      withCredentials: true,
    })

    const { success } = data;

    if(success){
      dispatch(refreshSession({...data}))
    }
  }
  
  useEffect(() => {
    checkAccessToken();
  }, [])

  setTimeout(() => { // do a silent refresh of the access token every 4 mins
    checkAccessToken();
  }, [240000])

  if(!userId || authenticationStatus.includes("2FA")) return <Auth />

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
