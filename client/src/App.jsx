import { Auth } from "./Pages";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft);

const App = () => {
  return (
    <div className="App">
      <Auth />
    </div>
  );
};

export default App;
