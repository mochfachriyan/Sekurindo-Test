import React, { Component } from "react";
class Dashboard extends Component {
    render() {
        return (
            <div className="d-flex flex-column">
                <h1>DASHOARD</h1>
                <span>
                    WELCOME <br />
                    {this.props.userName}
                </span>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.handleLogout}
                    style={{ margin: 10 }}
                >
                    LOGOUT
                </button>
            </div>
        );
    }
}

export default Dashboard;
