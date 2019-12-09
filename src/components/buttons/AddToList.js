import React, { Component } from "react";

class AddToList extends Component {
  render() {
    return (
      <button className="btn-primary btn-sm m-2" onClick={this.props.onClick}>
        Add To List
      </button>
    );
  }
}

export default AddToList;
