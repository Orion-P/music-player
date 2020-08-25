import React, { useState } from "react";

const SongList = props => {

    const [currentSongSection, setSongSection] = useState([]);

	console.log(props.songs);
	const renderedSongs = props.songs.map(song => {
		return (
			<div key={song.id} className="item">
				<div
					style={{ top: `25px`, fontSize: `20px`, left: `30px` }}
					className="ui image aligned "
				>
					<p className="ui left floated">
						<strong>Song: </strong>
						{song.name.toLowerCase()}
					</p>
					<p className="ui left floated">
						<strong>Artist: </strong>
						{song.artist_name}
					</p>
				</div>
				<img
					height="50px"
					width="50px"
					src={song.album_image}
					style={{ marginBottom: "8px" }}
				></img>
				<audio style={{ padding: `14px`, marginTop: `-10px` }} controls>
					<source src={song.audio} type="audio/mp3" />
				</audio>
			</div>
		);
	});

	return (
		<div className="ui mini divided list">
			{renderedSongs.length === 0 ? (
				<h1 className="ui center aligned header">Search for a song</h1>
			) : (
				renderedSongs
			)}
		</div>
	);
};

export default SongList;
