import React, { Component } from "react";
// import "./AddListForm.css";

class AddListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "", daysAssigned: "" };
  }

  isFormInvalid = () => {
    if (this.state.task === "" && this.state.daysAssigned === "")
      return "Enter task and days";
    else if (this.state.task === "") return "Enter task";
    else if (this.state.daysAssigned === "") return "Assign days";
    else if (this.state.daysAssigned <= 0)
      return "Days cannot be negative or zero";
    else return false;
  };

  render() {
    let form = (
      <form className="add-list-form">
        <div>
          <label htmlFor="taskInput" className="m-2">
            Task
          </label>
          <input
            id="taskInput"
            type="text"
            onChange={e => this.setState({ task: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dateInput" className="m-2">
            Days
          </label>
          <input
            id="taskInput"
            type="number"
            onChange={e =>
              this.setState({ daysAssigned: parseInt(e.target.value) })
            }
          />
        </div>
        <div>
          <span className="text-danger">{this.isFormInvalid()}</span>
        </div>
        <button
          className="btn-sm m-2 btn-primary"
          onClick={e => {
            if (!this.isFormInvalid()) {
              this.props.onFormSubmit(e, this.state);
            }
          }}
        >
          Add
        </button>
        <button className="btn-sm m-2 btn-danger" onClick={this.props.onCancel}>
          Cancel
        </button>
      </form>
    );

    if (this.props.formStatus) {
      return form;
    } else return null;
  }
}

export default AddListForm;
