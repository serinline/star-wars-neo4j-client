import { Link, BrowserRouter, Route} from "react-router-dom";

import Home from "./components/Home";
import Entities from "./components/Entities";
import Episodes from "./components/Episodes";
import Play from "./components/Play"
import "./App.css";
import React from "react";



const App = () => {

    return (
      <div>


          <div>
              <BrowserRouter>
                <nav id="navigation">
                  <li>
                      <Link to={"/home"} className="nav-link"> Home </Link>
                  </li>
                  <li>
                      <Link to={"/characters"} className="nav-link"> Characters </Link>
                  </li>
                  <li>
                      <Link to={"/episodes"} className="nav-link"> Episodes </Link>
                  </li>
                </nav>


                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path="/characters" component={Entities} />
                <Route exact path="/episodes" component={Episodes} />
              <div id="indicator"/>
              </BrowserRouter>

              <Play />


          </div>
      </div>
  );
};

export default App;
