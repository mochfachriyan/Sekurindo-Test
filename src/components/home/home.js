import React, { Component } from "react";
class Home extends Component {
    handleLogin = () => {
        this.props.handleNavbar({
            loginActive: true,
            signupActive: false,
            homeActive: false,
        });
    };
    handleSignup = () => {
        this.props.handleNavbar({
            signupActive: true,
            loginActive: false,
            homeActive: false,
        });
    };
    render() {
        return (
            <div className="d-flex flex-column">
                <br></br>
                <h1>SELAMAT DATANG DI APLIKASI KU</h1>
            </div>
        );
    }
}

export default Home;
