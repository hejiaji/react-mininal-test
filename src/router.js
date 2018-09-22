import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Home from './containers/home/home';
import Header from './containers/header/header';

const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/header">Sticky Header</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route path="/header" component={Header}/>
		</div>
	</Router>
);

export default AppRouter;
