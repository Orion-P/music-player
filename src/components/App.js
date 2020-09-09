import React from "react";
import axios from "axios";

import Nav from "./Nav";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { songs: [], term: "" };
		return;
	}

	onFormSubmit = (term) => {
		axios
			.get("https://api.jamendo.com/v3.0/tracks", {
				params: {
					client_id: "2bc19d22",
					format: "json",
					search: term,
					limit: 10,
				},
			})
			.then(({ data }) => {
				this.setState({ songs: data.results });
			})
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Nav onFormSubmit={this.onFormSubmit} />
				<SearchResults
					onSearch={this.onFormSubmit}
					term={this.state.term}
					songs={this.state.songs}
				></SearchResults>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
// <MusicPlayer songs={this.state.songs} />
// <div className="ui center aligned segment massive">
// 					<div className="ui menu secondary compact massive">
// 						<div className="item">
// 							<button className="ui left labeled icon button teal">
// 								<i className="left arrow icon"></i>
// 								Prev
// 							</button>
// 						</div>
// 						<div className="item">
// 							<SearchBar onFormSubmit={this.onFormSubmit} />
// 						</div>
// 						<div className="item">
// 							<button
// 								onClick={(e) => console.log(e)}
// 								className="ui right labeled icon button teal"
// 							>
// 								<i className="right arrow icon"></i>
// 								Next
// 							</button>
// 						</div>
// 					</div>
// 				</div>
