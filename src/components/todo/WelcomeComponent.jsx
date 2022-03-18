import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class WelcomeComponent extends Component{
    render() {
        return (
            <div className = "container">Welcome {this.props.params.name}. You can manage your todos <Link to = "/todos">here</Link></div>
        )        
    }
}

