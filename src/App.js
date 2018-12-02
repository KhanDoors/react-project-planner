import React, { Component } from "react";
import ProjectInput from "./components/ProjectInput";
import ProjectList from "./components/ProjectList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Love This Stuff!!</h1>
        <ProjectInput />
        <ProjectList />
      </div>
    );
  }
}

export default App;
