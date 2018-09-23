import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const styles = {
	section: {
		height: "500px",
	}
};

class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Link smooth to="#section3">sectionLink3</Link>
				</div>
				<div id="section1" style={styles.section}>
					section1
				</div>
				<div id="section2" style={styles.section}>
					section2
				</div>
				<div id="section3" style={styles.section}>
					section3
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
