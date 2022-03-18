import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Navigate } from 'react-router-dom'


class ListTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id : 1, description : 'Learn React', done : false, targetDate : new Date()},
                {id : 2, description : 'Learn Java', done : false, targetDate : new Date()},
                {id : 3, description : 'Learn Sql', done : false, targetDate : new Date()}
            ]
        }
    }
    render() {
        return (
            <div><h1>
                List Todos
                </h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>description</th>
                            <th>status</th>
                            <th>targetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* important step below (use of map function) */}
                        {
                            this.state.todos.map (
                                todo =>
                                <tr>
                               
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                           
                        }
                        
                    </tbody>
                </table>
                </div>
            </div>
        )        
    }
}

export default ListTodosComponent;