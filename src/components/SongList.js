import React from "react";
import Song from "./Song";

class SongList extends React.Component {
	render() {
		return (
			<div className="ui mini divided list">
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
				<Song />
                <Song />
                <Song />
				<Song />
			</div>
		);
	}
}

export default SongList;
