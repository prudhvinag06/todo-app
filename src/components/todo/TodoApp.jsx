import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams.jsx";


export default class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        // const WelcomeComponentWithParams = withParams(WelcomeComponent);

        return(
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} /> */}
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}
class ListTodosComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
                {id : 1, description : 'Learn React'},
                {id : 2, description : 'Learn Java'},
                {id : 3, description : 'Learn Sql'}
            ]
        }
    }
    render() {
        return (
            <div><h1>
                List Todos
                </h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* important step below (use of map function) */}
                        {
                            this.state.todos.map (
                                todo =>
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                </tr>
                            )
                           
                        }
                        
                    </tbody>
                </table>
            </div>
        )        
    }
}
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
                <ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>
                <ShowValidCredentials showSuccessMessage = {this.state.showSuccessMessage}/>
                <></>
                User Name : <input type = "text" name = "username" value = {this.state.username} onChange = {this.handleChange}/>
                Password : <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
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

function ShowInvalidCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    else return null
}

function ShowValidCredentials(props){
    if(props.showSuccessMessage){
        return <div>Successful Login</div>
    }
    else return null
}

function ErrorComponent(){
    return <div>Error Occured. Contact Support</div>
}


