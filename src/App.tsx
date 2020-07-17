import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect,
} from "react-router-dom";

import { Layout } from "antd";
import Home from "./routes/Home";
import config from "./config";
import Header from "./components/Header";

import "./App.less";

const App: React.FC<any> = () => {
	return (
		<Router>
			<Layout>
				<Layout.Header>
					<Header />
				</Layout.Header>
				<Layout.Content style={{ padding: "16px", margin: "0 auto" }}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/old-match">
							<Redirect to="/will-match" />
						</Route>
						<Route path="/will-match"></Route>
						<Route path="*">
							<NotFoundPage />
						</Route>
					</Switch>
				</Layout.Content>
				<Layout.Footer style={{ textAlign: "center" }}>
					Copyright &copy;
				</Layout.Footer>
			</Layout>
		</Router>
	);
};

function NotFoundPage() {
	config.setTitle("Error 404: Page Not Found");

	return (
		<div>
			<h1>Error 404</h1>
			<p>This page was deleted or does not exist.</p>
			<Link to="/">
				<h4>Go Back to Home</h4>
			</Link>
		</div>
	);
}

export default App;
