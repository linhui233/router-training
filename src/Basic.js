import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
class Basic extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="Basic">
            <Router>
                <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/topics`}>Topics</Link></li>
                </ul>

                <hr/>

                    <Route exact path={``} component={Home}></Route>
                    <Route path={`/about`} component={About}> </Route>
                    <Route path={`/topics`} component={Topics}></Route>
                </div>
            </Router>
        </div>
        );
    }
}
function Home() {
    return (
        <div>
            <h2>Home!</h2>
        </div>
    )
}
function About() {
    return (
        <div>
            <h2>About!</h2>
        </div>
    )
}
function Topics({match}) {
    return (
        <div>
            <h2>Topics!</h2>
            <ul>
                <li><Link to={`${match.url}/rendering`}>topic_render</Link></li>
                <li><Link to={`${match.url}/components`}>topic_components</Link></li>
                <li><Link to={`${match.url}/state`}>topic_state</Link></li>
            </ul>

            <Route exact path={`${match.path}/:topicId`} component={Topic}></Route>
            <Route exact path={match.path} render={() => <h3>选择topic</h3>}></Route>
        </div>
    )
}
function Topic({match}) {
    return (
        <div>
            <h4>当前topic:</h4>
            <h3>{match.params.topicId}</h3>
        </div>
    )
}
export default Basic;
