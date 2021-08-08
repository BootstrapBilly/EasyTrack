import { BrowserRouter, Switch, Route } from "react-router-dom";
import { WizardNav } from "../../components";
import { AddWorkout, WorkoutsList } from "./screens";
import { WorkoutsRoutes } from "../../constants";

const { WORKOUTS, ADD_WORKOUT } = WorkoutsRoutes;

const wizardOptions = [
  { route: ADD_WORKOUT, displayText: "Add workout" },
  { route: "naaa", displayText: "YEEEE" },
]

const App = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <BrowserRouter>
      <div className="py-3"><WizardNav root={{route: WORKOUTS, displayText: "Workouts"}} options={wizardOptions}/></div>
        <Switch>
          <Route path={`/${WORKOUTS}`} exact>
            <WorkoutsList />
          </Route>
          <Route path={`/${ADD_WORKOUT}`} exact>
            <AddWorkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
