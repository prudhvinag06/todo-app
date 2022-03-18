
import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component{
    render(){
        const isUserLoggedIn =  AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return (
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "http://www.leetcode.com" className="navbar-brand">Prudhvi</a></div>
                    <ul className = "navbar-nav">
                       {isUserLoggedIn && <li ><Link className = "navbar-nav" to = "/welcome/prudhvi">Home</Link></li>}
                       {isUserLoggedIn && <li ><Link className = "navbar-nav"to = "/todos">Todos</Link> </li>}
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        { !isUserLoggedIn && <li ><Link className = "navbar-nav" to = "/login">Login</Link> </li>}
                        { isUserLoggedIn && <li ><Link  className = "navbar-nav" to = "/logout" onClick={AuthenticationService.logout}>Logout</Link> </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;