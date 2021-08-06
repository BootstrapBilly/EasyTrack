import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WizardNav } from "../../components";
import { WorkoutsList } from "./screens";
import { WorkoutsRoots } from "../../constants";

const { ADD_WORKOUT } = WorkoutsRoots;

const App = () => {

  return (
    <div className="flex flex-col h-full">
      <BrowserRouter>
      <div className="py-2 bg-almostWhite"><WizardNav root={"Workouts"} options={[{route: ADD_WORKOUT, displayText: "Add workout"}]}/></div>
        <Switch>
          <Route path="/workouts" exact>
            <WorkoutsList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
