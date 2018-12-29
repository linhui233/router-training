import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const menus = [
    {
        path: '/',
        name: 'Home',
        id: 0,
        exact: true,
        component: Home
    },
    {
        path: '/main',
        name: 'Main',
        id: 1,
        exact: false,
        component: Main
    },
    {
        path: '/mine',
        name: 'Mine',
        id: 2,
        exact: false,
        component: Mine
    }
]
const styles = {
    bar: {
        width: 100,
        padding: 40,
        backgroundColor: '#eee'
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        color: '#f0f0f0'

    }
}
function SildeBar() {
    return (
        <Router>
            <div>
                <Bar></Bar>
                {menus.map(menu => <Route
                    path={menu.path}
                    exact={menu.exact}
                    key={menu.key}
                    component={menu.component}
                    >
                </Route>)}

            </div>
        </Router>
    )
}
function Bar() {
    return (
        <div style={styles.bar}>
            <ul style={styles.inner}>
                {menus.map( (menu) => <Link key={menu.id}
                    to={{pathname: menu.path, state: {name: menu.name}}}>
                    {menu.name}
                </Link>)}
            </ul>
            {menus.map(menu => <Route
                path={menu.path}
                exact={menu.exact}
                key={menu.key}
                component={menu.component}
            ></Route>)}
        </div>
    )
}
function MenuTitle({match}) {
    console.log(match);
    
    return <h3>{match.path}</h3>
}
function Home() {
    return <p>Home</p>
}
function Main() {
    return <p>Main</p>
}
function Mine() {
    return <p>Mine</p>
}
export default SildeBar