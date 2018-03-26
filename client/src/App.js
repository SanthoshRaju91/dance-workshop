import React, { Component } from "react";
import Workshop from './components/workshops';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
        </nav>
        <div className="container-fluid">
            <Workshop/>
        </div>
      </div>
    );
  }
}

export default App;
