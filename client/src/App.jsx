import { useEffect } from "react";
import { Auth, Dashboard, WorkoutsRoot } from "./Pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faCog,
  faEye,
  faEyeSlash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "./constants";
import { refreshSession } from "./store/actions";
import { Header } from "./components";

library.add(faBars, faChevronLeft, faChevronRight, faCog, faEye, faEyeSlash, faPlus);

const App = () => {
  const dispatch = useDispatch();
  const { user, authenticationStatus } = useSelector((state) => state.auth);

  const checkAccessToken = async () => {
      try{
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
      } catch (_) {}
  }
  
  useEffect(() => {
    checkAccessToken();
  }, [])

  setTimeout(() => { // do a silent refresh of the access token every 4 mins
    checkAccessToken();
  }, [240000])

  if(!user || authenticationStatus.includes("2FA")) return <Auth />

  return (
    <div className="flex flex-col h-full">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={["/", "/dashboard"]}exact>
            <Dashboard />
          </Route>
          <Route path="/workouts">
            <WorkoutsRoot />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
