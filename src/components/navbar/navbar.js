import React, { Component } from "react";

class Navbar extends Component {
    handleHome = () => {
        this.props.handleNavbar({
            loginActive: false,
            signupActive: false,
            homeActive: true,
        });
    };
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
            loginSuccess: false,
            dashboardActive: false,
        });
    };

    render() {
        return (
            <div className="navbar-container" style={{ width: "100vw" }}>
                <nav
                    className="navbar navbar-dark bg-dark "
                    style={{ width: "100%" }}
                >
                    <ul className="nav nav-pills nav-fill justify-content-around">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    this.props.active.homeActive && "active"
                                } `}
                                onClick={this.handleHome}
                            >
                                HOME
                            </button>
                        </li>
                        {!this.props.loginSuccess ? (
                            <>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${
                                            this.props.active.loginActive &&
                                            "active"
                                        } `}
                                        onClick={this.handleLogin}
                                    >
                                        LOGIN
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${
                                            this.props.active.signupActive &&
                                            "active"
                                        } `}
                                        onClick={this.handleSignup}
                                    >
                                        SIGNUP
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${
                                            this.props.active.loginActive &&
                                            "active"
                                        } `}
                                    >
                                        DASHBOARD
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`nav-link ${
                                            this.props.active.signupActive &&
                                            "active"
                                        } `}
                                        onClick={this.props.handleLogout}
                                    >
                                        LOGOUT
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
