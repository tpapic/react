import React, { Component } from "react";

import navigation from '../../_nav';
import NavLink from './navLink'
import NavDropdown from './navDropdown'


class Nav extends Component {
	render() {
    return (
      <div className="collpase navbar-collapse">
	      <ul className="navbar-nav mr-auto">
	     
	      	{ 
	      		navigation.map((currentNav, i) => { 
	      			if(currentNav.children && currentNav.children.length > 0) {
	      				return <NavDropdown n={currentNav} key={i}/>
	      			} else {
	      				return <NavLink n={currentNav} key={i}/>
	      			}
		      		
	      	 	}) 
	      	}

	      </ul>
      </div>
    );
  }
}

export default Nav;


