import axios from "axios";
import React, { Component } from "react";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userExists: false,
            userCreated: false,
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        this.setState({ userExists: false, userCreated: false });

        event.preventDefault();
        const data = new FormData(event.target);
        let user = {};
        for (var [key, value] of data.entries()) {
            user[key] = value;
        }
        axios({
            method: "post",
            url: "https://tc-frontend.sebisedu.co.id/auth/register",
            data: user,
        })
            .then((res) => {
                if (res.data.message === "userExists") {
                    this.setState({ userExists: true });
                } else if (res.data.message === "userCreated") {
                    console.log(res.data.message);
                    this.setState({ userCreated: true });
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
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
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
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=" Enter Full Name"
                        name="name"
                        required
                    />
                    <label htmlFor="address">Address</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter Address"
                        name="address"
                        required
                    />
                    {/* <label htmlFor="role">Role</label>
                    <select
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Select Role"
                        name="role"
                        required
                    /> */}
                    {/* <label htmlFor="avatar">avatar</label>
                    <image
                        type="file"
                        className="form-control"
                        id="avatar"
                        placeholder="choose Avatar"
                        name="address"
                        required
                    /> */}
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
                    {this.state.userExists && "User Already exists"}
                </div>
                <div className="valid-feedback d-block">
                    {this.state.userCreated && "New user created sucessfully"}
                </div>
            </form>
        );
    }
}

export default Signup;
