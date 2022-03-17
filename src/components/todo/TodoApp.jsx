import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams.jsx";


export default class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);

        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path="/welcome" element={<WelcomeComponent />} /> */}
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return (
            <div>Welcome {this.props.params.name}. You can manage your todos <Link to = "/todos">here</Link></div>
        )        
    }
}

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
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
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
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                           
                        }
                        
                    </tbody>
                </table>
            </div>
        )        
    }
}
class HeaderComponent extends Component{
    render(){
        return (
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href = "http://www.leetcode.com" className="navbar-brand">Prudhvi</a></div>
                    <ul className = "navbar-nav">
                        <li ><Link className = "navbar-nav" to = "/welcome/prudhvi">Home</Link></li>
                        <li ><Link className = "navbar-nav"to = "/todos">Todos</Link> </li>
                    </ul>
                    <ul className = "navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className = "navbar-nav" to = "/login">Login</Link> </li>
                        <li ><Link to = "/logout">Logout</Link> </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
            <div>
                <hr/>Footer
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


