import React from 'react';
import { FiAtSign, FiKey } from 'react-icons/fi';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="container">
      <div className="input-group flex-nowrap input-group-lg mb-3">
        <span className="input-group-text" id="addon-wrapping">
          <FiAtSign />
        </span>
        <input type="text" className="form-control" placeholder="Email" aria-label="email" aria-describedby="addon-wrapping" value={email} onChange={onEmailChange} />
      </div>
      <div className="input-group flex-nowrap input-group-lg mb-3">
        <span className="input-group-text" id="addon-wrapping">
          <FiKey />
        </span>
        <input type="password" className="form-control" placeholder="Password" aria-label="email" aria-describedby="addon-wrapping" value={password} onChange={onPasswordChange} />
      </div>
      <button type="button" className="btn btn-outline-primary btn-lg w-100 mb-3" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
