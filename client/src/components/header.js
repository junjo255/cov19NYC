import React from 'react';
import { render } from 'react-dom';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.handleToggle(event.target.id)
		if(event.target.id === "table-tab") {
			event.target.nextSibling.classList.remove("selected-tab");
		} else {
			event.target.previousSibling.classList.remove("selected-tab");
		}
		event.target.classList.add("selected-tab");
	}

	render() {
		return (
			<header>
				<p>Covid Tracker NYC</p>
				<div className="tab-container">
					<div id="table-tab" className="selected-tab" onClick={this.handleChange}>Table</div>
					<div id="map-tab" onClick={this.handleChange}>Map</div>
				</div>
			</header>
		)
	}
}




export default Header;