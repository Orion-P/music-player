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
                    limit: 200
				}
			})
			.then(({ data }) => {
				this.setState({ songs: data.results });
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<div>
				<NavigationBar />
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<MusicPlayer songs={this.state.songs} />
			</div>
		);
	}
}

export default App;
