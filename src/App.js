import "./App.css";
import Navbar from "./components/navbar/navbar";
import Signup from "./components/signup/signup";
import React, { Component } from "react";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Dashboard from "./components/dashboard/dashboard";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupActive: false,
            loginActive: false,
            homeActive: true,
            loginSuccess: false,
            dashboardActive: false,
            userName: "",
        };
    }
    handleNavbar = (clicked) => {
        this.setState(clicked);
    };
    handleLogin = (accessToken, userName) => {
        this.setState({
            loginSuccess: true,
            signupActive: false,
            loginActive: false,
            homeActive: false,
            dashboardActive: true,
            userName: userName,
        });
    };
    handleLogout = () => {
        this.setState({
            loginSuccess: false,
            signupActive: false,
            loginActive: false,
            homeActive: true,
            dashboardActive: false,
        });
    };
    render() {
        return (
            <div className="App">
                <Navbar
                    handleNavbar={this.handleNavbar}
                    active={this.state}
                    loginSuccess={this.state.loginSuccess}
                    handleLogout={this.handleLogout}
                />
                {this.state.homeActive && (
                    <Home handleNavbar={this.handleNavbar} />
                )}
                {this.state.signupActive && <Signup />}
                {this.state.loginActive && (
                    <Login handleLogin={this.handleLogin} />
                )}
                {this.state.dashboardActive && (
                    <Dashboard
                        handleLogout={this.handleLogout}
                        userName={this.state.userName}
                    />
                )}
            </div>
        );
    }
}

export default App;
