import { Auth } from "./Pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft, faEye, faEyeSlash);

const App = () => {
  return (
    <div className="App">
      <Auth />
    </div>
  );
};

export default App;
