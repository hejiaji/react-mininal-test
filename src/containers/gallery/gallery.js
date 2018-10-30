import React from 'react';
import gallery from "./gallery.css";

import StrangeThing from '../../assets/strange.png';

const images = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 }];

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.container = React.createRef();
		this.state = {
			visibleItems: images,
		}
	}

	get currentWidth () {
		console.log(this.container.current.offsetWidth);
		return parseInt(this.container.current.offsetWidth / 16 - 2 , 10);
	}

	getVisibleItemsCount () {
		console.log(this.currentWidth);
		return Math.round(this.currentWidth / 7.5);
	}

	updateDimensions = () => {
		this.setState({
			visibleItems: images.slice(0, this.getVisibleItemsCount()),
		})
	};

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		this.updateDimensions();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

  render() {
		console.log('render');
		// const visibleItems = images.slice(0, this.getVisibleItemsCount() - 1);
	  const invisibleCount = images.length - this.state.visibleItems.length;
    return (
      <div ref={this.container} className={gallery.container}>
	      {
		      this.state.visibleItems.map((image, index) => {
			      const isLast = index === this.state.visibleItems.length - 1;
			      const shouldShowShadow = isLast && invisibleCount > 0;
			      return (
			      	<a className={gallery.imageContainer}>
					      {
					      	shouldShowShadow && (
							      <div className={gallery.invisibleCount}>{invisibleCount}</div>
						      )
					      }
				        <img key={image.id} src={StrangeThing} alt="strange"/>
				      </a>
			      );
		      })
	      }
      </div>
    )
  }
}

export { Gallery };