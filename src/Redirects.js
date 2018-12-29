import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
    isLogin: false,
    authenticate(fn) {
        
        this.isLogin = true;
        
        setTimeout(fn, 100)// fake async
    },
    signout(fn) {
        this.isLogin = false;
        setTimeout(fn, 100)
    }
}
function AuthExample() {
    return (
        <Router>
            <div>
                <AuthLogin></AuthLogin>
                <ul>
                    <li><Link to="/entrance1">通用入口</Link></li>
                    <li><Link to="/entrance2" >需要登陆才能进入的入口</Link></li>
                </ul>
                <Route path="/entrance1" component={CommonEntrance}></Route>
                <CaseRoute path="/entrance2" component={VipEntrance}></CaseRoute>
                <Route path="/login" component={Login}></Route>
            </div>
        </Router>
    )
}
const AuthLogin =  withRouter( ({history}) => 
    fakeAuth.isLogin ? (
        <p>Welcome!
        <button onClick={() => {
            fakeAuth.signout(() => history.push("/"))
        }}>Sign out</button>
        </p>
    ) : <p>暂未登陆</p>
)
function CommonEntrance() {
    return (
        <p>通用入口</p>
    )
}
function VipEntrance() {
    return (
        <p>会员功能</p>
    )
}
function TouristEntrance() {
    return (
        <p>游客功能</p>
    )
}
function CaseRoute({component: Component, ...rest}) {
    return <Route {...rest} render={props => {
        if(fakeAuth.isLogin){
            return <Component></Component>
        }else{
            return <Redirect to={{
                pathname: '/login',
                state: {from: props.match.url}
            }}></Redirect>
        }
    }}>

    </Route>
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState(
                {isLogin: true}
            )
        })
    }
    render() {
        let isLogin = this.state.isLogin
        if(isLogin){
            return <Redirect to={this.props.location.state.from}></Redirect>
        }
        return <p>你需要先登陆! <button onClick={this.login}> log in</button></p>
    }
}
export default AuthExample