import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
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
        <h1 className="my-3">Register</h1>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/" className="text-decoration-none">Login</Link>
        </p>
      </div>
    </>
  );
}

export default RegisterPage;
