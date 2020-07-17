import React from "react";
import config from "../config";

const Home: React.FC = () => {
	config.setTitle();
	return (
		<div>
			<h1>Home</h1>
			<p>This is the Home component.</p>
		</div>
	);
};

export default Home;
