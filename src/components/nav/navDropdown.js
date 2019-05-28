import React, { Component } from "react";
import { Link } from 'react-router-dom';


class NavDropdown extends Component {
	render() {
	const props = this.props;

    return (
	  <li className="nav-item dropdown" key={props.n.name}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          { props.n.name }
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

        { props.n.children.map((c, i) => <Link to={ c.to } className="dropdown-item" key={i}>{c.name}</Link> )}
         
          
        </div>
      </li>
    );
  }
}

export default NavDropdown;