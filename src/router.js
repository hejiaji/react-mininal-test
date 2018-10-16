import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Home from './containers/home/home';
import Header from './containers/header/header';
import PureComponent from "./containers/pure-component/pure-component";

const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/header">Sticky Header</Link></li>
				<li><Link to="/pure">Pure Component</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route path="/header" component={Header}/>
			<Route path="/pure" component={PureComponent}/>
		</div>
	</Router>
);

export default AppRouter;
