import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const persons = [
    { id: 0, name: 'Michelle', friends: [1,2,3] },
    { id: 1, name: 'Sean', friends: [0, 3] },
    { id: 2, name: 'Kim', friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
]

function find(id) {
    return persons.find(p => p.id == id)
}
function RecursiveExample() {
    return (
        <Router>
            <Person match={ {params: {id: 0}, url: '' }}></Person>
        </Router>
    )
}
function Person({match}) {
    
    let id = match.params.id
    console.log(typeof(id));
    
    let person = find(id)
    console.log(person);
    
    
    return (
        <div>
            <h3>{person.name}'s friends</h3>
            <ul>
                {person.friends.map(id => {
                    return <li key={id}>
                        <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
                    </li>
                    
                })}
            </ul>
            <Route path={`${match.url}/:id`} component={Person}></Route>
        </div>
    )
}
export default RecursiveExample