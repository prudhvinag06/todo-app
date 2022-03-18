import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Navigate } from 'react-router-dom'


class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'prudhvi',
            password : '',
            hasLoginFailed : false,
            showSuccessMessage : false
        }
        this.handleChange = this.handleChange.bind(this);
       // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    render(){
        return(
            <div className="Login">
                <h1>Login</h1>
                <div className="container ">
                {/* <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>
                <ShowValidCredentials showSuccessMessage = {this.state.showSuccessMessage}/> */}
                <></>
                User Name : <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
                Password : <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                <button className = "btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    } 

    //common handler for both name and password {Very important}
    handleChange(event){
       // console.log(event.target.value)
        this.setState(
            {[event.target.name] : event.target.value}
        )
    }

    loginClicked(){
        if(this.state.username === "prudhvi" && this.state.password === "dummy"){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)            
        }
        else{
            console.log("Failure")
            this.setState({
                showSuccessMessage : false
            })
            this.setState({
                hasLoginFailed : true
            })
        } 
    }
}

export default LoginComponent