import React from "react";

import "../css/SearchResults.css";
import MusicPlayer from "./MusicPlayer";

const SearchResults = (props) => {
	if (props.songs.length === 0) {
		return (
			<div className="ui placeholder segment loading-screen">
                <h1 className="header">Please Search For A Song</h1>
                <i className="middle-icon icon massive purple loading spinner"></i>
			</div>
		);
	} else {
		return (
			<div className="ui placeholder segment">
				<MusicPlayer songs={props.songs}></MusicPlayer>
			</div>
		);
	}
};
export default SearchResults;
