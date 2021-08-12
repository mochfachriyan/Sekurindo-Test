import axios from "axios";
import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: "",
            successMessage: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        this.setState({
            errorMessage: "",
            successMessage: "",
        });

        event.preventDefault();
        const data = new FormData(event.target);
        let user = {};
        for (var [key, value] of data.entries()) {
            user[key] = value;
        }
        axios({
            method: "post",
            url: "https://tc-frontend.sebisedu.co.id/auth/login",
            data: user,
        })
            .then((res) => {
                if (res.data.message) {
                    this.setState({ errorMessage: res.data.message });
                }
                if (res.data.accessToken) {
                    this.setState({ successMessage: "Login successful" });
                    this.props.handleLogin(res.data.accessToken, user.identity);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <form
                className="register-form"
                onSubmit={(e) => this.handleSubmit(e)}
            >
                <div className="form-group">
                    <label htmlFor="identity">Email address</label>
                    <input
                        type="identity"
                        className="form-control"
                        id="identity"
                        name="identity"
                        placeholder="Enter email"
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        id="register-submit"
                        style={{ marginTop: 10, width: "100%" }}
                    >
                        Submit
                    </button>
                </div>

                <div className="invalid-feedback d-block">
                    {this.state.errorMessage}
                </div>
                <div className="valid-feedback d-block">
                    {this.state.successMessage}
                </div>
            </form>
        );
    }
}

export default Login;
