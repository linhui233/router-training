import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function CustomExample() {
    return (
        <Router>
            <div>
                <OldSchoolMenuLink exact={true} to="/" label="Home"></OldSchoolMenuLink>
                <OldSchoolMenuLink  to="/about" label="About"></OldSchoolMenuLink>
                <hr/>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
            </div>
        </Router>
    )
}
function OldSchoolMenuLink({exact, to, label}) {
    return (
        <Route
            path={to}
            exact={exact}
            children={( {match} ) => (
                <div>
                    {match ? ">" : ""}
                    <Link to={to}>{label}</Link>
                </div>
            )}/>
    )
}
function Home() {
    return <div>Home</div>
}
function About() {
    return <div>About</div>
}
export default CustomExample