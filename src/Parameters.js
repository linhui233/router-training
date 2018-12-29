import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function ParamsExample() {
    return (
        <Router>
          <div>
              <h2>Accounts</h2>
              <ul>
                  <li><Link to="/zhangsan">zhangsan</Link></li>
                  <li><Link to="/li4">li4</Link></li>
                  <li><Link to="/wang5">wang5</Link></li>
                  <li><Link to="/adminitor">adminitor</Link></li>
              </ul>
              <Route path="/:id" component={User}></Route>
              <Route exact path="/:direction(zhangsan|li4|wang5)" component={ComponentWithRegex}></Route>
              <Route exact path="/:direction(adminitor)" component={ComponentWithRegex}></Route>
          </div>

        </Router>
    )
}
function User({match}) {
    console.log(match);
    
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )
}
function ComponentWithRegex({match}) {
    console.log(match);
    
    return (
        <div>
            <h4>匹配api: "/:direction(user1|user2|user3)"</h4>
            {match.params.direction === 'adminitor'? <h4>当前账号为管理员</h4> : <h4>当前账号为用户</h4>}
        </div>
    )
}
export default ParamsExample