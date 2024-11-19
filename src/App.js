import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	pageSize = 5;
	state = {
		progress: 0,
	};
	setProgress = (progress) => {
		this.setState({ progress: progress });
	};
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<LoadingBar color="#f11946" progress={this.state.progress} />
					<br />

					<Switch>
						<Route exact path="/">
							<News
								setProgress={this.setProgress}
								key="General"
								category="General"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Business">
							<News
								setProgress={this.setProgress}
								key="Business"
								category="Business"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Entertainment">
							<News
								setProgress={this.setProgress}
								key="Entertainment"
								category="Entertainment"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Health">
							<News
								setProgress={this.setProgress}
								key="Health"
								category="Health"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Science">
							<News
								setProgress={this.setProgress}
								key="Science"
								category="Science"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Sports">
							<News
								setProgress={this.setProgress}
								key="Sports"
								category="Sports"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
						<Route exact path="/Technology">
							<News
								setProgress={this.setProgress}
								key="Technology"
								category="Technology"
								country="in"
								pageSize={this.pageSize}
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
