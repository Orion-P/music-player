import React from "react";

import SearchBar from "./SearchBar";
import "../css/Nav.css";

class Nav extends React.Component {
	onIClick = () => {
		window.location.reload(false);
	};

	render() {
		return (
			<div className="grid-container">
				<i onClick={this.onIClick} href="/" className="icon link home huge"></i>
				<SearchBar
					className="search-bar"
					onFormSubmit={this.props.onFormSubmit}
				/>
			</div>
		);
	}
}

export default Nav;
