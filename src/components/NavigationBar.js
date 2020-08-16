import React from "react";

class NavigationBar extends React.Component {
	render() {
		return (
			<div className="ui huge menu">
				<div
					style={{ position: `relative`, top: `3px` }}
					className="ui container"
				>
					<i className="ui circular teal icon music large"></i>
					<h1
						style={{ position: `relative`, bottom: `13px`, left: `5px` }}
						className="ui"
					>
						Music Player
					</h1>
				</div>
				<div className="right menu">
					<div className="item">
						<div className="ui primary button">Sign up</div>
					</div>
					<div className="item">
						<div className="ui button">Log-in</div>
					</div>
					<div className="item">
						<div className="ui button">Help</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavigationBar;
