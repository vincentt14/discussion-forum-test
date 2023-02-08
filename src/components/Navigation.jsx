import React from 'react';
import { FiHome, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <nav>
          <Link to="/" className="navbar-brand">
            Forum
            <span style={{ color: '#4877fd' }}>N</span>
            Go
          </Link>
        </nav>

        <img className="border border-secondary rounded-3" style={{ height: '40px' }} src={authUser.avatar} alt={authUser.id} title={authUser.name} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse leptop" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">
              <FiHome />
              {' '}
              Home
            </Link>
            <button type="button" className="nav-link rounded-2" onClick={signOut} style={{ height: '40px' }}>
              <FiLogOut />
              {' '}
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
