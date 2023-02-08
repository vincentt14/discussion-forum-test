import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { FiMessageSquare } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadItem({
  id, body, createdAt, title, totalComments, user,
}) {
  const { avatar, name } = user;

  const isString = (isiBody) => isiBody.search('<div>|<pre>|<p>|<b>|<i>|<blockquote>');

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="flex-shrink-0">
            <img className="border border-secondary rounded-circle" src={avatar} alt={id} title={name} style={{ height: '30px' }} />
          </div>
          <div className="flex-grow-1 ms-3">
            <h5 className="card-title ms-2 mb-0">{name}</h5>
          </div>
        </div>

        <Link className="text-decoration-none" to={`/threads/${id}`}>
          <h5 className="card-title">{title}</h5>
        </Link>
        {isString(body) === -1 ? <p className="card-text">{body}</p> : <div className="card-text">{parse(body)}</div>}
        <p className="mt-2 mb-0">
          <FiMessageSquare />
          {' '}
          Comments :
          {' '}
          {totalComments}
        </p>
        <p className="card-subtitle mb-2 text-muted">
          Created
          {' '}
          {postedAt(createdAt)}
        </p>
      </div>
    </div>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
