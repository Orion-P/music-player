import React from "react";
import SongList from "./SongList";
// import ReactPlayer from "react-player";

class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tenSongs: [] };
		return;
	}

	// componentDidUpdate() {
	// }

	updateSongs = songs => {
        this.setState({ tenSongs: songs });
        console.log(this.state.tenSongs);

	};

	render() {
		return (
			<div className="ui container">
				<div
					style={{ paddingTop: `20px` }}
					className="ui container right aligned"
				>
					<SongList updateSongs={this.updateSongs} songs={this.props.songs} />
				</div>
			</div>
		);
	}
}

export default MusicPlayer;
