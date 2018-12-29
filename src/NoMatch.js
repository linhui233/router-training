import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

function NoMatchExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/old-match">Old Match, to be redirected</Link>
                    </li>
                    <li>
                        <Link to="/will-match">Will Match</Link>
                    </li>
                    <li>
                        <Link to="/will-not-match">Will Not Match</Link>
                    </li>
                    <li>
                        <Link to="/also/will/not/match">Also Will Not Match</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Redirect path="/old-match" to="/will-match"></Redirect>
                    <Route path="/will-match" component={Will}></Route> 
                    <Route component={NoMatch}></Route>
                </Switch>
            </div>
        </Router>
    )
}
function Home() {
    return (
        <p>
            <code>Switch_Home</code>
        </p>
    )
}
function Will() {
    return (
        <p>Matched!</p>
    )
}
function NoMatch({ location }) {
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}
export default NoMatchExample