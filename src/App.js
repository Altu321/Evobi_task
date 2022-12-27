import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter,Route,Routes} from "react-router-dom";


import ScreenOne from "./component/Screen1/ScreenOne";
import ScreenTwo from "./component/Screen2/ScreenTwo";
import ScreenThree from "./component/Screen3/ScreenThree";
import ScreenFour from "./component/Screen4/ScreenFour";
function App() {
  return (
    <BrowserRouter>
      <div className="Main-container">
        <Routes>
          <Route path="/"  exact element={<ScreenOne/>} />
          <Route path="/screenTwo" element={<ScreenTwo/>} />
          <Route path="/screenThree" element={<ScreenThree/>} />
          <Route path="/screenFour"  element={<ScreenFour/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
