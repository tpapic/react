import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from "./routes"
import Navigation from "./components/nav/nav"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Bill App</Link>
            <Navigation />
            
          </nav>
          <br/>
          { routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />) }

        </div>
      </Router>
    );
  }
}
export default App;