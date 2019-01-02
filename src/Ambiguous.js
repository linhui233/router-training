import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
function Ambiguous() {
    return (
        <Router>
            <div>

                <ul>
                    <NavLink to="/test1" name="test1" render={(to, name) => <Link to={to}>{name}</Link>}></NavLink>
                    <NavLink to="/test2" name="test2" render={(to, name) => <Link to={to}>{name}</Link>}></NavLink>
                    <NavLink to="/jack" name="jack" render={(to, name) => <Link to={to}>{name}</Link>}></NavLink>
                    <NavLink to="/rose" name="rose" render={(to, name) => <Link to={to}>{name}</Link>}></NavLink>
                </ul>
                <Route exact path="/test" component={Test}/>
                <Route exact path="/test2" component={Test2}/>
                <Route exact path="/:user" component={User}/>
            </div>
        </Router>
    )
}
function NavLink({to, name, render}) {
    return render(to, name)
}
function Test() {
    return <p>Test</p>
}
function Test2() {
    return <p>Test2</p>
}
function User({match: {params: {user}}}) {
    
    return <p>User: {user}</p>
}
export default Ambiguous