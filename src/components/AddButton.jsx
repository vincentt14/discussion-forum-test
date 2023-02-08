import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function AddButton() {
  return (
    <Link to="/addThread">
      <div className="homepage__action">
        <button className="action" title="tambah" type="button">
          <FiPlus />
        </button>
      </div>
    </Link>
  );
}

export default AddButton;
