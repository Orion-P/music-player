import React from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
// eslint-disable-next-line
import Login from "./Login";
import MusicPlayer from "./MusicPlayer";
import SearchBar from "./SearchBar";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { songs: [] };
		return;
	}

	onFormSubmit = term => {
		axios
			.get("https://api.jamendo.com/v3.0/tracks", {
				params: {
					client_id: "2bc19d22",
					format: "json",
					search: term,
					limit: 10
				}
			})
			.then(({ data }) => {
				this.setState({ songs: data.results });
			})
			.catch(err => console.log(err));
	};

	onPageSwitch() {}

	render() {
		return (
			<div>
				<NavigationBar />
				<div className="ui center aligned segment massive">
					<div className="ui menu secondary compact massive">
						<div className="item">
							<button className="ui left labeled icon button teal">
								<i className="left arrow icon"></i>
								Prev
							</button>
						</div>
						<div className="item">
							<SearchBar onFormSubmit={this.onFormSubmit} />
						</div>
						<div className="item">
							<button
								onClick={e => console.log(e)}
								className="ui right labeled icon button teal"
							>
								<i className="right arrow icon"></i>
								Next
							</button>
						</div>
					</div>
				</div>
				<MusicPlayer songs={this.state.songs} />
			</div>
		);
	}
}

export default App;
