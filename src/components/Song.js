import React from "react";

class Song extends React.Component {
	render() {
		return (
            <div className="item">
            <div style={{top: `25px`, fontSize: `20px`, left: `30px`}} className="ui image aligned " >Title</div>
				<audio style={{padding: `14px`, marginTop: `-10px`}} controls>
					<source src="/" type="audio/mp3" />
				</audio>
			</div>
		);
	}
}

export default Song;
