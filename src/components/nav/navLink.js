import React, { Component } from "react";
import { Link } from 'react-router-dom';


class NavLink extends Component {
	render() {
	const props = this.props;
    return (
      <li className="navbar-item" key={props.key}>
		<Link to={ props.n.to } className="nav-link">{props.n.name}</Link>
	  </li>
    );
  }
}

export default NavLink;