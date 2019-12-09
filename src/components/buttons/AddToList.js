import React from 'react';
import PropTypes from 'prop-types';

function AddToList(props) {
  return (
    <button className="btn-primary btn-sm m-2" onClick={props.onClick}>
      Add To List
    </button>
  );
}

AddToList.propTypes = {
  onClick: PropTypes.func
};

export default AddToList;
