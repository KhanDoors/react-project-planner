import React, { Component } from "react";
import ProjectItem from "./ProjectItem";

class ProjectList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h1 className="text-capitalize text-center">Project List</h1>
        {items.map(item => {
          return (
            <ProjectItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}

        <button
          type="button"
          className="button btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}

export default ProjectList;
