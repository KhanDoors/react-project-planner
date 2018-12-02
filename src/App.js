import React, { Component } from "react";
import ProjectInput from "./components/ProjectInput";
import ProjectList from "./components/ProjectList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-capitalize text-center">New Project</h1>
            <ProjectInput />
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
