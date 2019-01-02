import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
const routes = [
    {
      path: "/sandwiches",
      component: Sandwiches
    },
    {
      path: "/tacos",
      component: Tacos,
      routes: [
        {
          path: "/tacos/bus",
          component: Bus
        },
        {
          path: "/tacos/cart",
          component: Cart
        }
      ]
    }
  ];
function WrapRoute(route) {
    let {path, routes} = route
    
    return (
        <Route path={path} render={props => {
            return <route.component {...props} routes={routes}></route.component>
        }}/>
    )
}
function Sandwiches() {
    return <h2>Sandwiches</h2>
}
function Tacos({routes}) {
    console.log(routes);
    
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">bus</Link>
                    <Link to="/tacos/cart">cart</Link>
                </li>
            </ul>
            {routes.map((route, index) => (
                <WrapRoute {...route} key={index}></WrapRoute>
            ))}
        </div>
    )
}
function Bus() {
    return <h2>Bus</h2>
}
function Cart() {
    return <h2>Cart</h2>
}
function ConfigExample() {
    return (
        <Router>
            <div>
                <h1>ConfigExample</h1>
                <ul>
                    <li><Link to="/sandwiches">sandwiches</Link></li>
                    <li><Link to="/tacos">tacos</Link></li>
                </ul>
                {routes.map((route, index) => (
                     <WrapRoute key={index} {...route}></WrapRoute>
                ))}
            </div>
        </Router>
    )
}
export default ConfigExample
  