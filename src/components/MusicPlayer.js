import React from "react";
import SongList from "./SongList";
import "../css/MusicPlayer.css";

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tenSongs: [] };
		return;
	}

	updateSongs = (songs) => {
		this.setState({ tenSongs: songs });
	};

	render() {
		return (
			<div className="ui container wrapper">
				<SongList updateSongs={this.updateSongs} songs={this.props.songs} />
			</div>
		);
	}
}

export default MusicPlayer;
