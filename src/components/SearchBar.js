import React from "react";

class SearchBar extends React.Component {
	state = { term: "sad" };

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	render() {
		return (
			<div className="ui container center aligned">
				<form
					style={{ padding: `10px` }}
					onSubmit={this.onFormSubmit}
					className="ui form"
				>
					<div style={{ width: `80%` }} className="field huge ui icon input">
						<i className="search icon"></i>
						<input
							name="search"
							type="text"
							placeholder="Music Search"
							value={this.state.term}
							onChange={this.onInputChange}
						></input>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
