import { useEffect } from "react";
import { Auth, Dashboard, WorkoutsRoot } from "./Pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faCog,
  faEdit,
  faEye,
  faEyeSlash,
  faPlus,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_URL } from "./constants";
import { refreshSession } from "./store/actions";
import { Header } from "./components";
import { Routes } from "./constants";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { WORKOUTS_URL } from "./constants";
import { setContext } from '@apollo/client/link/context';

const { WORKOUTS } = Routes;

library.add(faBars, faChevronLeft, faChevronRight, faCog, faEdit, faEye, faEyeSlash, faPlus, faTrashAlt);

const App = () => {
  const dispatch = useDispatch();
  const { user, authenticationStatus, jwt } = useSelector((state) => state.auth);
  
  const httpLink = createHttpLink({
    uri: WORKOUTS_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization:`Bearer ${jwt}`,
      }
    }
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

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
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path={["/", "/dashboard"]}exact>
              <Dashboard />
            </Route>
            <Route path={`/${WORKOUTS}`}>
              <WorkoutsRoot />
            </Route>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
