import React from 'react';
import PropTypes from 'prop-types';
import { FiCheck } from 'react-icons/fi';

function DoneButton({ addThread }) {
  return (
    <div className="add-new-page__action">
      <button className="action" title="tambah" type="button" onClick={() => addThread()}>
        <FiCheck />
      </button>
    </div>
  );
}

DoneButton.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default DoneButton;
