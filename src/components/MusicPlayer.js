import React from "react";
import SongList from "./SongList";
// import ReactPlayer from "react-player";

class MusicPlayer extends React.Component {

    constructor(props) {
        super(props)
        return;
    }

	render() {
		return (
			<div className="ui container">
				<div
					style={{ paddingTop: `20px` }}
					className="ui container right aligned"
                >
					<SongList songs={this.props.songs}/>
				</div>
			</div>
		);
	}
}

export default MusicPlayer;
