import React, { useState, useEffect } from "react";
import "../css/SongList.css";

const SongList = (props) => {
	const [currentSongSection, setSongSection] = useState([]);
	useEffect(() => {
		props.updateSongs(renderedSongs);
	}, [currentSongSection]);

	const renderedSongs = props.songs.map((song) => {
		const songNameFormatted =
			song.name.substring(0, 1).toUpperCase() + song.name.substring(1);

		return (
			<div key={song.id} className="item">
				<p className="text">
					<strong>
						Song:<br></br>
					</strong>
					{songNameFormatted}
				</p>
				<img
					height="150px"
					width="150px"
					src={song.album_image}
					style={{ marginBottom: "8px" }}
				></img>
				<p className="text artist">
					<strong>
						Artist:<br></br>
					</strong>
					{song.artist_name}
				</p>
				<audio controls>
					<source src={song.audio} type="audio/mp3" />
				</audio>
				<a href={song.audiodownload} className="ui small basic icon buttons">
					<button className="ui button">
						<i className="download center purple icon big"></i>
					</button>
				</a>
			</div>
		);
	});

	return (
		<div>
			<div className="ui divided list">
				{renderedSongs.length === 0 ? null : renderedSongs}
			</div>
		</div>
	);
};

export default SongList;
