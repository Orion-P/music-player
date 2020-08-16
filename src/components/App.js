import React from "react";
import NavigationBar from "./NavigationBar";
import Login from "./Login";

class App extends React.Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<Login className="ui"/>
			</div>
		);
	}
}

export default App;
