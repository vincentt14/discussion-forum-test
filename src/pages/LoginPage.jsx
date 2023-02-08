import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Forum
            <span style={{ color: '#4877fd' }}>N</span>
            Go
          </Link>
        </div>
      </nav>
      <div className="container">
        <h1 className="my-3">login</h1>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register" className="text-decoration-none">Register</Link>
        </p>
      </div>
    </>

  );
}

export default LoginPage;
