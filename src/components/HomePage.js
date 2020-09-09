import React from "react";
import "../css/HomePage.css";
import MusicPlayer from "./MusicPlayer";

const HomePage = (props) => {
	if (!props.term) {
		return (
			<div
				className="ui placeholder segment loading-screen"
			>
				<h1 className="ui header center aligned">Please Search For A Song</h1>
				<i className="middle-icon loading icon link spinner massive"></i>
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
export default HomePage;
