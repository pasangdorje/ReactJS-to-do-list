import React from 'react';
import PropTypes from 'prop-types';

function ResetList(props) {
  return (
    <button className="btn-warning btn-sm m-2" onClick={props.onClick}>
      Reset List
    </button>
  );
}

ResetList.propTypes = {
  onClick: PropTypes.func
};

export default ResetList;
