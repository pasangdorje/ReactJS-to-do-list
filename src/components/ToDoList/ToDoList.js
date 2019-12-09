import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ToDoList extends Component {
  calcRemainingDays = item => {
    const currentTimeStamp = new Date().getTime();
    const millisecToDay = 1 / 86400000;
    let remDays;
    if (!item.isDone) {
      remDays =
        item.daysAssigned -
        (currentTimeStamp - item.issueTimeStamp) * millisecToDay;
      if (remDays <= 0) {
        return 0;
      }
      return remDays;
    }
    return 0;
  };

  formatStatusText = item => {
    let textClass;
    let remDays = this.calcRemainingDays(item);
    textClass = remDays < 1 ? 'text-danger font-weight-bold' : 'text-primary';
    return (
      <span className={textClass}>
        {item.isDone ? ' Complete' : ' Pending'}
      </span>
    );
  };

  render() {
    const { toDoList } = this.props;
    return (
      <div className="list-table">
        <table className="container border border-dark">
          <thead>
            <tr className="bg-primary">
              <th>ID</th>
              <th>Task</th>
              <th>Remaining Days</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toDoList.map(item => (
              <tr key={item.id} className="bg-light">
                <td>{item.id}</td>
                <td>{item.task}</td>
                <td>{Math.ceil(this.calcRemainingDays(item))}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() =>
                      this.props.onActionPerformed(item.id, 'checkbox')
                    }
                    checked={item.isDone}
                  />
                  {this.formatStatusText(item)}
                </td>
                <td>
                  <button
                    className="btn-danger btn-sm m-2"
                    onClick={() =>
                      this.props.onActionPerformed(item.id, 'delete')
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ToDoList.propTypes = {
  toDoList: PropTypes.array,
  onActionPerformed: PropTypes.func
};

export default ToDoList;
