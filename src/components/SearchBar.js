import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field huge ui icon input">
					<i className="search icon purple"></i>
					<input
						name="search"
						type="text"
						placeholder="Music Search"
						value={this.state.term}
						onChange={this.onInputChange}
					></input>
				</div>
			</form>
		);
	}
}

export default SearchBar;
