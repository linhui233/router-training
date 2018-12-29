import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Basic from './Basic'
import ParamsExample from './Parameters'
import AuthExample from './Redirects'
import ChildrenExample from './Children'
import BlockExample from './Block'
import NoMatchExample from './NoMatch'
import Recursive from './Recursive'
import SildeBar from './SildeBar'
class App extends Component {
  render() {
    var componentName = 'AuthExample'
    return (
      <div>
        {/* <ParamsExample></ParamsExample> */}
        {/* <AuthExample></AuthExample> */}
        {/* <ChildrenExample></ChildrenExample> */}
        {/* <BlockExample></BlockExample> */}
        {/* <NoMatchExample></NoMatchExample> */}
        {/* <Recursive></Recursive> */}
        <SildeBar></SildeBar>
      </div>
    );
  }
}

export default App;
