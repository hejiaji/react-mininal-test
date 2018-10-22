import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Home from './containers/home/home';
import Header from './containers/header/header';
import PureComponent from "./containers/pure-component/pure-component";
import { Gallery } from "./containers/gallery/gallery";

const AppRouter = () => (
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/header">Sticky Header</Link></li>
				<li><Link to="/pure">Pure Component</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
			</ul>

			<hr/>

			<Route exact path="/" component={Home}/>
			<Route path="/header" component={Header}/>
			<Route path="/pure" component={PureComponent}/>
			<Route path="/gallery" component={Gallery} />
		</div>
	</Router>
);

export default AppRouter;
