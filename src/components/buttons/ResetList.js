import React, { Component } from "react";

class ResetList extends Component {
  render() {
    return (
      <button className="btn-warning btn-sm m-2" onClick={this.props.onClick}>
        Reset List
      </button>
    );
  }
}

export default ResetList;
