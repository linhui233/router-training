import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
function blockingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Form}></Route>
                <Route path="/one"  render={() => <h3>one</h3>}></Route>
                <Route path="/two"  render={() => <h3>two</h3>}></Route>
            </div>
        </Router>
    )
}
class Form extends React.Component {
    state = { isBlocking: false }
    render() {
        let { isBlocking } = this.state
        
        return (
            <form 
                onSubmit={event => {
                    event.target.reset()
                    this.setState({
                        isBlocking: false
                    })
                }}
            >
                <Prompt
                    when={isBlocking}
                    message={location => `你确定要跳到${location.pathname}`}
                />

                <p>
                    锁定状态? {isBlocking ? 'Yes,试着点击其他链接' : 'No'}
                </p>

                <p>
                    <input 
                        type="text"
                        size="50"
                        placeholder="输入以锁定"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.length > 0
                            })
                        }}
                    />    
                </p>

                <p>
                    <button>submit</button>
                </p>
            </form>
        )
    }
}
export default blockingExample