import React from "react";
import "./Login.css";

class Login extends React.Component {

    state = {username: '', password: ''};

	render() {
		return (
			<div className="login ui placeholder compact segment">
				<div className="ui one column very relaxed stackable grid">
					<div className="column">
						<div className="ui massive form">
							<div className="field">
								<label>Username</label>
								<div className="ui left icon input">
									<input type="text" placeholder="Username" />
									<i className="user icon"></i>
								</div>
							</div>
							<div className="field">
								<label>Password</label>
								<div className="ui left icon input">
									<input type="password" placeholder="Password" />
									<i className="lock icon"></i>
								</div>
							</div>
							<div className="ui blue massive submit button">Login</div>
						</div>
						<div className="ui massive button">
							<i className="signup icon"></i>
							Sign Up
						</div>
					</div>
					<div className="middle aligned column"></div>
				</div>
			</div>
		);
	}
}

export default Login;
