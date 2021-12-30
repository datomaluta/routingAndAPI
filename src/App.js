import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./components/style.css";
import Api from "./components/Api";


function App() {
  return (
    <Router>
          <div className="box">
            <h2>Menu</h2>
            <nav>
              <ul>
                <li>
                  <Link className="linkclass" to="/">Home</Link>
                </li>
                <li>
                  <Link className="linkclass" to="/about">About</Link>
                </li>
                <li>
                  <Link className="linkclass" to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className="linkclass" to="/projects">Projects</Link>
                </li>
              </ul>
            </nav>

      
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
              <Route path="/contact">
                    <Contact/>
              </Route>
              <Route path="/projects">
                    <Projects/>
              </Route>
              <Route path="/api">
                    <Api/>
              </Route>
             </Switch>
          </div>
        </Router>
  );
}

export default App;
