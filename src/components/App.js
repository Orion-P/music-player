import React from "react";
import NavigationBar from "./NavigationBar";
// eslint-disable-next-line
import Login from "./Login";
import MusicPlayer from "./MusicPlayer";
import SearchBar from "./SearchBar";

class App extends React.Component {
	render() {
		return (
			<div>
				<NavigationBar />
                <SearchBar />
                <MusicPlayer />
			</div>
		);
	}
}

export default App;
