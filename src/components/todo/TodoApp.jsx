import React, {Component} from "react";
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams.jsx";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";



export default class TodoApp extends Component{
    render(){
        
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

        return(
            <div className="TodoApp">
                <Router>
                <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        {/* <Route path="/welcome" element={<WelcomeComponent />} /> */}
                        <Route path="/welcome/:name" element={<AuthenticatedRoute>
<WelcomeComponentWithParams /></AuthenticatedRoute>
} />
                        <Route path="/todos" element={<AuthenticatedRoute>
<ListTodosComponent /></AuthenticatedRoute>
} />
                        <Route path="*" element={<ErrorComponent />} />
                        <Route path="/logout" element={<AuthenticatedRoute>
<LogoutComponent/></AuthenticatedRoute>
}/>
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}





