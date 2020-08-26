import React, { useState, useEffect } from "react";

const SongList = props => {
	const [currentSongSection, setSongSection] = useState([]);
	console.log(props);
	useEffect(() => {
		props.updateSongs(renderedSongs);
	}, [currentSongSection]);

	const renderedSongs = props.songs.map(song => {
		const songNameFormatted =
			song.name.substring(0, 1).toUpperCase() + song.name.substring(1);

		return (
			<div key={song.id} className="item">
				<div
					style={{ top: `25px`, fontSize: `20px`, left: `30px` }}
					className="ui image aligned "
				>
					<p className="ui left floated">
						<strong>Song: </strong>

						{songNameFormatted}
                    </p>
                    <br></br>
					<p className="ui left floated">
						<strong>Artist: </strong>
						{song.artist_name}
					</p>
				</div>
				<div style={{ paddingTop: "10px", marginBottom: "14px" }}>
					<img
						height="60px"
						width="60px"
						src={song.album_image}
						style={{ marginBottom: "8px" }}
					></img>
					<audio style={{ padding: `20px`, marginTop: `10px` }} controls>
						<source src={song.audio} type="audio/mp3" />
					</audio>
					<a
						style={{ position: "relative", bottom: "41.5px" }}
						href={song.audiodownload}
						className="ui small basic icon buttons"
					>
						<button className="ui button">
							<i className="download center blue icon big"></i>
						</button>
					</a>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui mini divided list">
				{renderedSongs.length === 0 ? null : renderedSongs}
			</div>
		</div>
	);
};

export default SongList;
