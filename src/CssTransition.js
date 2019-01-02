import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './test.css'
const styles = {
    nav: {
        color: '#000',
        listStyle: 'none'

    },
    navbar: {
        height: '40px',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    container: {
        width: '100%',
        height: '600px'
    }
}

function CssExample() {
    return (
        <Router>
            <Route render={({location}) => {
                console.log(location);
                
                return(
                <div>
                    <ul style={styles.navbar}>
                        <li style={styles.nav}><Link to="/hsl/100/20/30">color1</Link></li>
                        <li style={styles.nav}><Link to="/hsl/50/30/40">color2</Link></li>
                        <li style={styles.nav}><Link to="/rgb/100/40/30">color3</Link></li>
                        <li style={styles.nav}><Link to="/rgb/200/50/30">color4</Link></li>
                    </ul>
                    <Route exact path="/" render={() => <Redirect to="/hsl/100/20/30"></Redirect>}></Route>
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="fade" timeout={300}>
                            <Switch location={location}>
                                <Route exact path="/hsl/:h/:s/:l" component={HSL}>

                                </Route>
                                <Route exact path="/rgb/:r/:g/:b" component={RGB}>

                                </Route>
                                {/* <Route render={() => <div>Not Found</div>} /> */}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>

            )}}>
            </Route>


        </Router>
    )
}
function HSL({match: { params }}) {
    console.log(params);
    let {h, s, l} = params
    let moreStyle = {backgroundColor: `hsl(${h}, ${s}%, ${l}%)`}
    //Object.assign(styles.container, moreStyle)
    return (
        <div style={{ ...styles.container, ...moreStyle}}></div>
    )
}
function RGB({match: {params}}) {
    console.log(params);
    let {r, g, b} = params
    let moreStyle = {backgroundColor: `rgb(${r}, ${g}, ${b})`}
    return (
        <div style={ {...styles.container, ...moreStyle} }></div>
    )
    
}
export default CssExample