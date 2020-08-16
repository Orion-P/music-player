import React from "react";
import SongList from "./SongList";
// import ReactPlayer from "react-player";

class MusicPlayer extends React.Component {
	render() {
		return (
			<div className="ui container">
				<div style={{paddingTop: `20px`}} className="ui container right aligned">
					<SongList />
				</div>
			</div>
		);
	}
}

export default MusicPlayer;
