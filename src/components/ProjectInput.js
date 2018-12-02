import React, { Component } from "react";

class ProjectInput extends Component {
  render() {
    const { item, handleChange, handleSubmit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input_group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a Project"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary my-3">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default ProjectInput;
