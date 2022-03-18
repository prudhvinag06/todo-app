import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Navigate } from 'react-router-dom'

export default class AuthenticationRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
            return {...this.props.children}
        }
        else{
            return <Navigate to="/login" /> 
        }
    }
}